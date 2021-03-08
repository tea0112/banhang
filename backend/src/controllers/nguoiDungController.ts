import bcrypt from "bcrypt";
import NguoiDung from "../models/NguoiDung";
import { Response } from "express";
import IAuthRequest from "../Auth/IAuthRequest";

export const getNguoiDung = async (req: IAuthRequest, res: Response) => {
  const nguoidung = await NguoiDung.findOne({ email: req.email });
  res.status(200).json(nguoidung);
};

export const getTopFive = async (req: IAuthRequest, res: Response) => {
  try {
    if (req.query.email) {
      const regex = `^${req.query.email}.*`;
      const nguoidung = await NguoiDung.find({
        email: { $regex: regex },
      }).limit(5);
      res.status(200).json(nguoidung);
    } else res.status(501).json({ query: req.query });
  } catch (error) {
    res.sendStatus(404).json({
      error,
    });
  }
};

export const createNguoiDung = (req: IAuthRequest, res: Response) => {
  // encode password into bcrypt
  bcrypt.genSalt(10, (error, salt) => {
    if (error == null) {
      bcrypt
        .hash(req.body.password, salt)
        .then((hash) => {
          const nguoidung = new NguoiDung({
            ...req.body,
            password: hash,
          });

          nguoidung
            .save()
            .then(() => {
              res.status(201).json({
                status: "success",
                data: req.body,
              });
            })
            .catch((err) => {
              res.status(404).json({
                status: "fail",
                data: "Invalid data",
                error: err,
              });
            });
        })
        .catch((err) => {
          res.status(404).json({
            status: "fail",
            data: "Invalid data",
            error: err,
          });
        });
    } else {
      throw new Error("Invalid password");
    }
  });
};
