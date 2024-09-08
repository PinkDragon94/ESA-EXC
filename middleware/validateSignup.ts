import { Request, Response, NextFunction } from 'express';

const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, favoriteSneaker, email } = req.body;

  if (!firstName || !lastName || !favoriteSneaker || !email) {
    return res.status(400).send('All fields are required');
  }

  next();
};

export default validateSignup;
