import type { ErrorRequestHandler } from "express";
import { AppError } from "../errors/app.error";

export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next,
): void => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
    return;
  }

  console.log(error);

  response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
