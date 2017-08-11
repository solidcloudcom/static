import * as FBStrategy from 'passport-facebook';
import User from '../models/User';
import config from '../config';
import { UserUpdates } from '../interfaces';

const strategy = new FBStrategy(
    {
        clientID: config.get('FACEBOOK_CLIENT_ID'),
        clientSecret: config.get('FACEBOOK_CLIENT_SECRET'),
        callbackURL: config.get('FACEBOOK_CALLBACK_URL'),
        profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    (accessToken, refreshToken, params, profile, done) => {
        const options = {
            upsert: true,
            new: true,
        };

        const updates: UserUpdates = {
            id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value,
            provider: profile.provider,
        };

        User.findOneAndUpdate({ id: profile.id }, updates, options)
            .then(user => done(null, user))
            .catch(done);
    }
);

export default strategy;
