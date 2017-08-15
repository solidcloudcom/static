import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import * as session from 'express-session';
import * as mongoose from 'mongoose';
import * as path from 'path';

import { configureExpressApp,
         configurePassport,
         bootstrapDB,
         bootstrapApp,
         setTemplateEngine,
         configureRouter } from './helpers/app.helpers';

import config from './config';
import router from './router/router.js';

import strategies from './oauth/index';
import User from './models/User';

const app: express.Application = express();

bootstrapDB(mongoose, config.get('MONGO_PATH'), Promise);

configureExpressApp(
    app,
    [
        logger('dev'),
        cookieParser(),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        express.static(path.join(__dirname, '../public')),
        session(config.get('SESSION_OPTIONS')),
        passport.initialize(),
        passport.session(),
    ]
);

setTemplateEngine(app, 'pug', path.join(__dirname, '../src/server/views'));

configurePassport(passport, strategies, User);

configureRouter(app, router);

bootstrapApp(app, 3000);
