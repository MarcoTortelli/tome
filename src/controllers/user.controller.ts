import type { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser({ name, email, password });
    res.status(201).json(user);
    return;
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
    return;
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const user = await userService.getUserById(id);
    res.status(200).json(user);
    return;
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;
    const user = await userService.updateUser(id, { name, email, password });
    res.status(200).json(user);
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const user = await userService.deleteUser(id);
    res.status(200).json(user);
    return;
  } catch (error) {
    next(error);
  }
};
