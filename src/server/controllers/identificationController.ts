import { Response, Request } from 'express';

const identificationController = (req: Request, res: Response): void => {
    res.json(req.user);
};

export default identificationController;
