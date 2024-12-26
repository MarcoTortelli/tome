import bcrypt from "bcrypt";
import type { NextFunction, Request, Response } from "express";

export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
};
