"use strict"
let koa = require('koa'),
	_ = require('lodash'),
	bodyParser = require('koa-bodyparser'),
	router = require('koa-router'),
	views = require('co-views'),
	md = require('markdown-js'),
	
	session = require('./session/'),
	User = require('../api/users'),
	Auth = require('../utils/auth.js');

const apiRouter = router();	

//api app
let apiApp = koa();

//cookie keys
apiApp.keys = ['some secret hurr'];

//body e session
apiApp.use(bodyParser());
apiApp.use(session());

// jade render para os markdown
var render = views('public', { 
		default: 'jade',
		map: { 
				html: 'jade', md: md 
			} 
	});

apiRouter.get('/',function*(){
	
	this.body = yield render('/readme.jade');
	
	
});

// Sessions || AUTH
// --------------------------------------------------------------
	//	ROTA para averiguar a passagem de dado pelo body do post
	apiRouter.post('/testBody', function*(next){
		this.body = this.request.body;
		  yield(next);

	})

	//	ROTA de autorização básica
	//	-> por meio de cookie session
	apiRouter.post('/signin',function*(next){
		var authData,auth,user;

		//confere se não se trata de um pedido de logout
		if(!this.request.body.logout){
			//caso nao se tratar de um pedido de logout
			//	-> atribui authdata, contendo credenciais ENVIADAS VIA BODY
			authData =  this.request.body;

			//busca user pelo email
			user = yield User.findByEmail(authData.email); 

			//confere se usuario forneceu a password correta
			auth = yield user.isPassword(authData.password);


			if(auth) {
				//caso verdadeiro se cria a sessão do usuario
				//  -> atribuindo ao objeto de sessao o id do usuario autenticado
				this.session.user = user.id; 	
				this.session.role = user.role; 	
				this.status = 200;
				this.body = user.id;
			}else {
				//caso falso limpa a sessão só por segurança
				this.session = null;
				this.status  = 401;
				this.body = 'unauthorized'
			}
		}else{
			//caso se tratar de um pedido de logout
			//		-> limpa a sessão
			this.session = null;
			this.status  = 205;
		}

		yield(next);
	})

	//	ROTA de criação de usuário
	apiRouter.post('/signup',function*(next){
		
		//TODO checar se existe já o email cadastrado?(ou add isso no front?)
		var user, userData;
		userData = this.request.body;
		user = new User(userData);
		yield user.save();
		this.status = 201;
		yield(next);
	})
	
	//	ROTA para testar a persistencia do usuario
	apiRouter.get('/getUser',function*(next){
		var user,	idUser;
		idUser = this.session.user;
		user = yield User.findById(idUser);
		this.body = user.fullName;

		this.status = 200;
		yield(next);
	})
	
	//	ROTA apenas para testar 
	//	-> se o usuario esta associado a sessão
	apiRouter.get('/custumer/user',function*(next){
		var user,	idUser;
		idUser = this.session.user;
		user = yield User.findByUserId(idUser);
		this.body = user.fullName;

		this.status = 200;
		yield(next);
	})
	
	// função que autoriza o acesso as ROTAs privadas 
	//	-> desde que aja um usuario associado a sessão
	

	//private ROUTE
	apiRouter.use('/custumer',Auth.isAuth());

	//pharmacie ROUTE
	apiRouter.use('/pharmacie',Auth.isAuth(),Auth.isGranted(2))

	//admin ROUTE

	//suplier ROUTE	
	

// =========================================================
// koa app and export
// =========================================================
	
	apiApp
	  .use(apiRouter.routes())
	  .use(apiRouter.allowedMethods());

	module.exports = apiApp;
