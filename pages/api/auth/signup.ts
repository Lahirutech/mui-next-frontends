import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../database/config';
import Users, { IUser } from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch((error) =>
    res.json({ error: `Connection Failed...!${error}` })
  );

  if (req.method == 'POST') {
    if (!req.body) return res.status(404).json({ error: ' no data' });
    const { username, email, password } = req.body;

    const checkExisting = await Users.findOne({ email });
    if (checkExisting)
      return res.status(422).json({ message: 'User already exist' });

    Users.create(
      { username, email, password: await hash(password, 12) },
      function (err: any, data: IUser) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
