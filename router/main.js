var pack = require('../package.json');


module.exports = function(app)
{
     app.get('/chat1',function(req,res){
        res.render('index', {version:pack.version});
    });
	
	app.get('/chat2',function(req,res){
        res.render('index2', {version:pack.version});
    });
	
	app.get('/chat3',function(req,res){
        res.render('index3', {version:pack.version});
    });
	
	 app.get('/',function(req,res){
		 res.render('menu.html');
    });

}