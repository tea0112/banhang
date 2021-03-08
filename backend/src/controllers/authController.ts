import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";
import NguoiDung, { INguoiDung } from "../models/NguoiDung";
import { Request, Response } from "express";

function generateAccessToken(email: string) {
  return jwt.sign(email, authConfig.secretKey);
}

export const login = (req: Request, res: Response) => {
  // find user
  NguoiDung.findOne({ email: req.body.email })
    .then((nguoiDung: INguoiDung) => {
      // user is found
      if (nguoiDung !== null) {
        // compare bcrypt
        bcrypt.compare(req.body.password, nguoiDung.password, (err, result) => {
          // match
          if (result) {
            res.status(200).json({
              accessToken: generateAccessToken(nguoiDung.email),
            });
          }
        });
      } else {
        throw new Error("Invalid Email or Password");
      }
    })
    .catch((error) => {
      res.status(401).json({
        status: "fail",
        data: "Invalid User",
        error,
      });
    });
};
