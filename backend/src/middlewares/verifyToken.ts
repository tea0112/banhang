import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import IAuthRequest from "../Auth/IAuthRequest";
import authConfig from "../config/auth.config";

export default (req: IAuthRequest, res: Response, next: NextFunction) => {
  const authHeader: string = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, authConfig.secretKey, (err, decode) => {
      if (err) {
        res.status(401).json({
          status: "fail",
          err,
        });
      } else {
        req.email = decode.toString();
        next();
      }
    });
  } else {
    res.status(401).json({
      status: "fail",
      message: "No Authorization Header",
    });
  }
};
