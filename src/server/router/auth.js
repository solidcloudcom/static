const router = require('express').Router();
const passport = require('passport');

const callbackUrlController = ({ provider, successRedirect = '/', failureRedirect = '/login' }) => {
    return passport.authenticate(provider, { successRedirect, failureRedirect });
};

router.get('/vkontakte', passport.authenticate('vkontakte'));
router.get('/facebook', passport.authenticate('facebook'));

router.get('/vkontakte/callback', callbackUrlController({ provider: 'vkontakte' }));
router.get('/facebook/callback', callbackUrlController({ provider: 'facebook' }));

module.exports = router;
