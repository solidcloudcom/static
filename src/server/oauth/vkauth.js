
const VKStrategy = require('passport-vkontakte').Strategy;
const User = require('../models/User');
const config = require('../config');

const strategy = new VKStrategy(
    {
        clientID: config.get('VKclientId'),
        clientSecret: config.get('VKclientSecret'),
        callbackURL: config.get('VKcallbackURL'),
    },
    (accessToken, refreshToken, params, profile, done) => {
        const options = {
            upsert: true,
            new: true,
        };

        const updates = {
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

module.exports = strategy;
