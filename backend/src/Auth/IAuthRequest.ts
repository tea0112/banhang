import { Request } from "express";

export default interface IAuthRequest extends Request {
  email: string;
}
