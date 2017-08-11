import * as express from 'express';
import * as passport from 'passport';
import { CallbackArguments } from '../interfaces';

const router: express.Router = express.Router();

const callbackUrlController = ({ provider, successRedirect = '/', failureRedirect = '/login' }: CallbackArguments) => {
    return passport.authenticate(provider, { successRedirect, failureRedirect });
};

router.get('/vkontakte', passport.authenticate('vkontakte'));
router.get('/facebook', passport.authenticate('facebook'));

router.get('/vkontakte/callback', callbackUrlController({ provider: 'vkontakte' }));
router.get('/facebook/callback', callbackUrlController({ provider: 'facebook' }));

export default router;
