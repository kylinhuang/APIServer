
/**
 * Created by kylinhuang on 03/11/2017.
 */

var Router = require('koa-router');
var User = require('../app/controllers/user');
var App = require('../app/controllers/app');


module.exports = function () {
    var router = new Router({
        prefix:'/api/1'
    });

    // router.post('/api/i/u/signup' ,User.signup);

    router.post('/u/signup' ,User.signup);
    router.post('/u/verify' ,User.verify);
    router.post('/u/update' ,User.update);

    router.post('/signature' ,App.signature);


    return router ;


};