import React from "react";
import { IUser } from "./Posts";
// interfaces
interface Props {
  user: object;
}
interface IUserNew {
  user: IUser;
}
const User: React.FC<IUserNew> = ({ user }: IUserNew) => {
  return (
    <ul>
      <li>{user.name}</li>
      <li>
        {user.address.street} {user.address.city}
      </li>
    </ul>
  );
};

export default User;
