
let router = require('koa-router'),
	views = require('co-views'),
	bodyParser = require('koa-bodyparser'),
	Auth = require('./utils/auth.js'),
	_ = require('lodash'),
    compress  = require('koa-compress'),
    marko     = require('marko');
	
	var viewsRouter = router();

	let render = views('./views/')

	// NOTE
	//Redirects to home
	viewsRouter.get('/',function*(){
		this.redirect('/home')
	})
	
	viewsRouter.get('/home',function*(){
			var template = require('./views/pages/home/template.marko');
			template.render({
					// Adding the `i18n` variable to $global is required so
					// that it will be available as `out.global.i18n` during
					// template rendering.
					$global: { 
						currentUser: { id: 2, fullname: 'Hansel Eine', role:'custumer' }
					}	
				},
				this.res);
	})
	
	viewsRouter.get('/login',function*(){
		this.body = marko.load('./views/pages/login/template.marko').stream({
		  $global: { 
			currUser: { id: 2, username: 'hansel' },
			url: '/home'
		  }
		})
		
		this.type = 'text/html'
	})
	
	viewsRouter.post('/tryPost', function*(){
		console.log(this.request.body);
		this.body = this.request.body;
	})
	
	viewsRouter.get('/register',function*(){
		this.body = marko.load('./views/pages/register/template.marko').stream({
		  $global: { 
			currUser: { id: 2, username: 'hansel' },
			url: '/home'
		  }
		})
		this.type = 'text/html'
	})
	
	viewsRouter.get('/404',  function*(){
		this.body = marko.load('./views/pages/404/template.marko').stream({
		  url:'/home',
		  $global: { 
			currUser: { id: 2, username: 'hansel' },
			url: '/home'
		  }
		})
		this.type = 'text/html'
		
	})

module.exports = viewsRouter;