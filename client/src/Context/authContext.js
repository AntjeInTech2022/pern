import { createContext, useState, useEffect } from 'react';

const backendUrl = 'http://localhost:5000';

// 2. Create Context / Global Store
export const AuthContext = createContext();

// AUTHENTICATOR

// 3. Create provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState([]);

  // AUTHENTICATION
  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch('http://localhost:5000/authentication/verify', {
  //       method: 'POST',
  //       headers: { jwt_token: localStorage.token },
  //     });

  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const setAuth = (boolean) => {
  //   setIsAuthenticated(boolean);
  // };

  //REGISTER
  const register = async (email, password) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/register`, options);
    const { success, error, jwt } = await res.json();
    localStorage.setItem('jwt', jwt);
    setUser({ ...user });
    return { success, error };
  };

  //LOGIN
  const login = async (email, password) => {
    console.log('email', email);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/login`, options);
    const { success, token, error } = await res.json();
    localStorage.setItem('jwt', token);
    setUser({ ...user });
    // setIsAuthenticated(true);
    return { success, error };
  };

  return (
    <AuthContext.Provider value={{ setUser, user, register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
