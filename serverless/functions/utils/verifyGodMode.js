import verifyJwt from './verifyJwt';
import { UserItem } from 'schemas/User';

export default async (token) => {
  const ID = await verifyJwt(token);
  const user = await UserItem.findById(ID).exec();
  return user.GodMode;
};
