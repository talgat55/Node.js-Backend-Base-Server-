import express from 'express';
import path from 'path';
import config from "./config/config.json"
import favicon from 'static-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import db from "./db/db.js"
import apiRouters from "./routers/api.js"
import cors from 'cors'

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// config.enable_api == "true"
// prefix 
if (config.prefix_enable == "true") {

    var subdomainOptions = {
        base: config.host
    };

    app.use(require('subdomain')(subdomainOptions));


    app.get(`/subdomain/${config.prefix_name}/`, (req, res, next) => {
        ///  works -> api.localhost
        res.send("True Subdomain");
    });
    app.get(`/subdomain/${config.prefix_name}/v1`, (req, res, next) => {
        ///  works -> api.localhost/v1
        res.send("True Subdomain 2");
    });


}

/// Enable Api
if (config.enable_api) {


    // enable cors
    app.use(cors());


    
    let redyVersionApi = config.version_api ? config.version_api : "v1";
    // enable prefix for api
    if (config.prefix_enable == "true") {

        app.use(`/subdomain/api/${redyVersionApi}`, apiRouters);

    } else {

        app.use(`api/${redyVersionApi}/`, apiRouters);

    }

}
//var debug = require('debug')('my-application');
//var app = require('../app');
var routes = require('./routes/index');
var users = require('./routes/users');
// environment

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.mode = 'development');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


app.use('/', routes);
app.use('/users', users);


/// error handlers


if (config.debug_mode) {
    // development error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {

    // production error handler
    // no stacktraces leaked to user
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: "Somethink wrong"
        });
    });
}





var server = app.listen(app.get('port'), () => {
    //debug('Express server listening on port ' + server.address().port);
    console.log('Express server listening on port ' + server.address().port);
});