import { RequestHandler } from 'express';
import { Application, Router } from 'express';
import { Profile, Strategy, PassportStatic } from 'passport';
import { Model, Mongoose } from 'mongoose';

import logger from './logger';

export function configureExpressApp(app: Application, options: Array<RequestHandler>): void {
    logger.info('configuring express app...');
    options.forEach((option) => {
        logger.info(option.name, 'is about to be configured');
        app.use(option);
    });
}

export function configurePassport(passport: PassportStatic, strategies: Array<Strategy>, model: Model<any>): void {
    logger.info('configuring passport strategies...');
    strategies.forEach((strategy) => {
        logger.info('strategy: ' + strategy.name, 'is about to be configured');
        passport.use(strategy);
    });

    passport.serializeUser((user: Profile, done): void => {
        done(null, user.id);
    });

    passport.deserializeUser((id: string, done) => {
        model.findOne({ id })
             .then(user => done(null, user))
             .catch(done);
    });
}

export function bootstrapDB(mongoose: Mongoose, mongoPath: string, promise): void {
    logger.info('boostraping database...');
    mongoose.Promise = promise;
    mongoose.connect(mongoPath, { useMongoClient: true });
    const db = mongoose.connection;
    db.once('open', logger.info.bind(console, 'connected to the database'));
    db.on('error', logger.warn.bind(console, 'DATABASE ERROR:'));
}

export function configureRouter(app: Application, router: Router): void {
    logger.info('configuring routes...');
    app.use('/', router);
}

export function setTemplateEngine(app: Application, engine: string, templatesDirPath: string): void {
    logger.info('setting template engine...');
    app.set('view engine', engine);
    app.set('views', templatesDirPath);
}

export function bootstrapApp(app: Application, port: number) {
    app.listen(port, (err: Error | null) => {
        if (err) {
            logger.warn('something went wrong', err);
        } else {
            logger.info(`listening on ${port}`);
        }
    });
}
