import { Response, Request } from 'express';

const indexController = (req: Request, res: Response): void => {
    if (req.isAuthenticated()) {
        res.render('index');
    } else {
        res.redirect('/login');
    }
};

export default indexController;
