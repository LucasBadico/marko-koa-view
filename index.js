"use strict"
require('./configure');

var path = require('path');

let koa = require('koa'),
	mount = require('koa-mount'),
	router = require('koa-router'),
	serve = require('koa-static'),
	views = require('co-views'),
	compress = require('koa-compress'),
//	session = require('./api/session/'),
	viewsRouter = require('./router.js'),
	app = module.exports = koa();

app.keys = ['behealth.homolog'];

// =========================================================
// Middleware
// =========================================================

	//Middleware: request logger
	function*reqlogger(next){
	  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
	  yield next;
	}
	app.use(reqlogger);

// =========================================================
// Mount path
// =========================================================
	//core api
//	let api = require('./api/'); 
//		app.use(mount('/api', api));

// ==========================================================
// Views
// ==========================================================



	// compressão
	app.use(compress( {flush: require('zlib').Z_SYNC_FLUSH} ));

	// css, js, img's
	app.use(serve(__dirname + '/public'));
	
	// rotas
	app.use(viewsRouter.routes())
	   .use(viewsRouter.allowedMethods());

//		require('marko/node-require').install();
//		
//		app.use(function *() {
//			console.log(this);
//			
//			var template = require('./views/pages/home/template.marko');
//			template.render({
//					// Adding the `i18n` variable to $global is required so
//					// that it will be available as `out.global.i18n` during
//					// template rendering.
//					$global: { 
//						currentUser: { id: 2, fullname: 'Hansel Eine', role:'custumer' }
//					}	
//				},
//				this.res);
//		});


	// catch all middleware, only land here
	// if no other routing rules match
	// make sure it is added after everything else
	app.use(function *(){
	  // or redirect etc
		
		
		if(this.url.slice(1).match(/\//).length == 0){
			this.redirect('/404');
		}
	   
	});


// ==========================================================
// Listning
// ==========================================================
 
	app.listen(3000);