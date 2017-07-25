const router = require('express').Router();
const passport = require('passport');

const indexController = require('./controllers/indexController');

router.get('/login', (req, res) => {
    res.render('index');
});

router.get('/auth/vkontakte', passport.authenticate('vkontakte'));
router.get('/auth/vkontakte/callback',
    passport.authenticate('vkontakte', {
        successRedirect: '/?OKK',
        failureRedirect: '/login',
    })
);

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/?OKK',
        failureRedirect: '/login',
    })
);

router.get('*', indexController);

module.exports = router;
