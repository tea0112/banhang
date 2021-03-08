import NguoiDung from "../models/NguoiDung";
import { Response, NextFunction } from "express";
import IAuthRequest from "../Auth/IAuthRequest";
import { INguoiDung } from "../models/NguoiDung";

export default (permittedRoles: string[]) => async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const nguoidung: INguoiDung = await NguoiDung.findOne({
      email: req.email,
    }).then((User: INguoiDung) => User);
    if (nguoidung && permittedRoles.includes(nguoidung.role)) {
      next();
    } else {
      res.status(500).json({
        message: "no permission",
      });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
