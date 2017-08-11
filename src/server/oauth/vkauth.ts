import * as passportVK from 'passport-vkontakte';
import User from '../models/User';
import config from '../config';
import { UserUpdates } from '../interfaces';

const VKStrategy = passportVK.Strategy;

const strategy = new VKStrategy(
    {
        clientID: config.get('VKONTAKTE_CLIENT_ID'),
        clientSecret: config.get('VKONTAKTE_CLIENT_SECRET'),
        callbackURL: config.get('VKONTAKTE_CALLBACK_URL'),
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
