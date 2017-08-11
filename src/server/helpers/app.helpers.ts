import { RequestHandler } from 'express';
import { Application, Router } from 'express';
import { Profile, Strategy, PassportStatic } from 'passport';
import { Model, Mongoose } from 'mongoose';

export function configureExpressApp(app: Application, options: Array<RequestHandler>): void {
    options.forEach(option => app.use(option));
}

export function configurePassport(passport: PassportStatic, strategies: Array<Strategy>, model: Model<any>): void {
    strategies.forEach(strategy => passport.use(strategy));

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
    mongoose.Promise = promise;
    mongoose.connect(mongoPath, { useMongoClient: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DATABASE ERROR:'));
    db.once('open', console.info.bind(console, 'DB CONNECTED'));
}

export function configureRouter(app: Application, router: Router): void {
    app.use('/', router);
}

export function setTemplateEngine(app: Application, engine: string, templatesDirPath: string): void {
    app.set('view engine', engine);
    app.set('views', templatesDirPath);
}

export function bootstrapApp(app: Application, port: number) {
    app.listen(port, (err: Error | null) => {
        if (err) {
            console.error('something went wrong', err);
        } else {
            console.log(`listening on ${port}`);
        }
    });
}
