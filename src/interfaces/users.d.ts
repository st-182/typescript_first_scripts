export interface Address {
  street: string;
  city: string;
}
export interface IUser {
  id: number;
  name: string;
  address: Address;
  //   address: {
  //     street: string;
  //     city: string;
  //   };
}
export interface IMath {
  action: func;
  text: string;
  numbers: arr;
}
