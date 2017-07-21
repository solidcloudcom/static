const router = require('express').Router();
const passport = require('passport');

const indexController = require('./controllers/indexController');

router.get('/auth/vkontakte', passport.authenticate('vkontakte'));

router.get('/login', (req, res) => {
	res.render('index');
});

router.get('/auth/vkontakte/callback',
    passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
);

router.get('*', indexController);

module.exports = router;
