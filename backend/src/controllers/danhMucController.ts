import DanhMuc from "../models/DanhMuc";
import { Request, Response } from "express";

export const add = (req: Request, res: Response) => {
  const danhmuc = new DanhMuc({
    ...req.body,
  });

  danhmuc
    .save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const danhMucs = await DanhMuc.find({});
    res.status(200).json(danhMucs);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const exist = await DanhMuc.findOne({
      ten: req.query.ten,
    });
    if (exist) {
      await DanhMuc.deleteOne({
        ten: req.query.ten,
      });
      res.status(200).json();
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(404);
  }
};

export const getTopFive = async (req: Request, res: Response) => {
  try {
    if (req.query.ten) {
      const regex = `^${req.query.ten}.*`;
      const danhmuc = await DanhMuc.find({
        ten: { $regex: regex },
      }).limit(5);
      res.status(200).json(danhmuc);
    } else res.sendStatus(404);
  } catch (error) {
    res.sendStatus(404).json({
      error,
    });
  }
};
