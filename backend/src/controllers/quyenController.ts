import Quyen from "../models/Quyen";
import { Request, Response } from "express";

export const getAllQuyens = async (req: Request, res: Response) => {
  try {
    const quyens = await Quyen.find({}).exec();
    res.status(200).json({ quyens });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};

export const createQuyen = async (req: Request, res: Response) => {
  try {
    const quyen = new Quyen(req.body);

    await quyen.save();

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};
