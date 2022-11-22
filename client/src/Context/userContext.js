import { createContext, useState, useEffect } from 'react';

const backendUrl = 'http://localhost:5000';

// 2. Create Context / Global Store
export const UsersContext = createContext();

// 3. Create provider
export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

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
  useEffect(() => {
    getUsers();
  }, []); //  '[]' makes sure there is only one request

  console.log(users);

  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  );
};
