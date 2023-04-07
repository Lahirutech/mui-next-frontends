import Users from '../../model/Schema';
import { UserType } from '../types/dboperationTypes';

export const getUser = async (user: UserType) => {
  const result = await Users.findOne({ email: user.email });
  return result;
};
