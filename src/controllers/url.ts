import { Request, Response } from "express";
import shortId from "shortid";

import Url from "../database/models/Url";

const encode = async (req: Request, res: Response) => {
  const { url } = req.body;

  const existingUrl = await Url.findOne({
    where: {
      originalUrl: url,
    },
  });

  if (existingUrl) {
    return res.status(200).json({ shortUrl: existingUrl.shortUrl });
  } else {
    const urlId = shortId.generate();

    const newUrl = await Url.create({
      originalUrl: url,
      shortUrl: `http://localhost:5000/${urlId}`,
    });

    return res.status(200).json({ shortUrl: newUrl.shortUrl });
  }
};

const decode = async (req: Request, res: Response) => {};

export default { encode, decode };
