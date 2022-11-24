import { createContext, useState, useEffect } from 'react';

const backendUrl = 'http://localhost:5000';

// 2. Create Context / Global Store
export const AuthContext = createContext();

// AUTHENTICATOR

// 3. Create provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  //REGISTER
  const register = async (name, email, password) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/register`, options);
    const { success, error, token, user } = await res.json();
    localStorage.setItem('jwt', token);
    setUser(user);
    return { success, error };
  };

  //LOGIN
  const login = async (email, password) => {
    // console.log('email', email);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/login`, options);
    const { success, token, error, user } = await res.json();
    localStorage.setItem('jwt', token);
    setUser(user);
    // setIsAuthenticated(true);
    return { success, error };
  };
  console.log('loged in user', user);

  // updateProfileHeader
  const updateProfileHeader = async ({ profile_header }) => {
    try {
      // const body = { profile_header };
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profile_header, options }),
      };
      const response = await fetch(
        `${backendUrl}/api/users/updateProfileHeader`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setUser(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ setUser, user, register, login, updateProfileHeader }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
