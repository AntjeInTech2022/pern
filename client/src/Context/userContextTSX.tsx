import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Users } from '../@types/index';


export type UsersContextValue = {
  users: Users | null
  getUsers: () => void   
   
}


const backendUrl = 'http://localhost:5000';

// 2. Create Context / Global Store
const initialAuth: UsersContextValue = {
  users: null,
  getUsers:  () => { throw new Error('Typescript Error get Users'); }
}

export const UsersContext = createContext<UsersContextValue>(initialAuth)

// 3. Create provider
export const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<Users | null>(initialAuth.users)

  const getUsers = async () => {
    try {
      // fetch makes a get request by default
      const response = await fetch(`${backendUrl}/api/users/all`);
      const jsonData = await response.json();
      // console.log(jsonData);
      setUsers(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  // console.log(users);

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
   {children}
    </UsersContext.Provider>
  );
};
