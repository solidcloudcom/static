import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import * as session from 'express-session';
import * as mongoose from 'mongoose';
import * as path from 'path';

import config from './config';
// import router from './router/router.js';
// import Strategies from './oauth/index';
// import User from './models/User';

class Server {
    public static bootstrap(port = 3000): Server {
        return new Server(port);
    }

    private static dataBase: mongoose.Connection = mongoose.connection;

    public app: express.Application;

    constructor(public port: number) {
        this.app = express();
        this.runDB();
        this.config();
        this.passport();
        this.routes();
        this.run();
    }

    private runDB(): void {
        (<any>mongoose).Promise = Promise;
        mongoose.connect(config.get('MONGO_PATH'));
    }

    private config(): void {
        this.app.use(logger('dev'));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, '../../public')));
        this.app.use(session({
            secret: 'keyboard cat',
            saveUninitialized: true,
            resave: true,
        }));

        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(__dirname, '/views'));
    }

    private passport(): void {}

    private routes(): void {
        const router = Routes.bootstrap().router;
        this.app.use('/', router);
    }

    private run(): void {
        this.app.listen(this.port, (err: any) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`listening on ${ this.port }`);
            }
        });
    }

}
