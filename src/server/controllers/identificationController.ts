import { Response, Request } from 'express';

const identificationController = (req: Request, res: Response): void => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.statusCode = 404;
        res.end('Not authenticated');
    }
};

export default identificationController;
