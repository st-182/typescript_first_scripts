import React, { useEffect, useState } from "react";
import User from "./User";
import { Address, IUser } from "../interfaces/users";
// interface Address {
//   street: string;
//   city: string;
// }
// export interface IUser {
//   id: number;
//   name: string;
//   address: Address;
//   //   address: {
//   //     street: string;
//   //     city: string;
//   //   };
// }

const Posts: React.FC = () => {
  // Hooks
  // -- state
  const [data, setData] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <p>Posts/Users</p>
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.map((user) => <User user={user} key={user.id} />)
      )}
    </div>
  );
};

export default Posts;
