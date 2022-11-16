import { createContext, useState, useEffect } from 'react';

const backendUrl = 'http://localhost:5000';

// 2. Create Context / Global Store
export const AuthContext = createContext();

// 3. Create provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState([]);

  //REGISTER
  const register = async (email, password, name) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    };
    const res = await fetch(`${backendUrl}/api/users/register`, options);
    const { success, error, jwt, name } = await res.json();
    localStorage.setItem('jwt', jwt);
    setUser({ ...user, name });
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
    const { success, token, error, name } = await res.json();
    localStorage.setItem('jwt', token);
    setUser({ ...user, name });
    return { success, error };
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
