import { createContext, useState, useEffect } from "react";

const backendUrl = "http://localhost:5000";

// 2. Create Context / Global Store
export const AuthContext = createContext();

// AUTHENTICATOR

// 3. Create provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  //REGISTER
  const register = async (name, email, password) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/register`, options);
    const { success, error, token, user } = await res.json();
    localStorage.setItem("jwt", token);
    setUser(user);
    return { success, error };
  };

  //LOGIN
  const login = async (email, password) => {
    // console.log('email', email);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/api/users/login`, options);
    const { success, token, error, user } = await res.json();
    localStorage.setItem("jwt", token);
    setUser(user);
    // setIsAuthenticated(true);
    return { success, error };
  };
  console.log("loged in user", user);

  // updateProfileHeader
  const updateProfileHeader = async (profile_header) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login firsrt" };
    } else {
      const body = { profile_header };
      console.log('body', body)
      try {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify(body),
        };
        const response = await fetch(
          `${backendUrl}/api/users/updateProfileHeader`,
          options
        );
        console.log('response', response)
      const res = await response.json();
      console.log('res', res)
    
        setUser({ ...user, profile_header });
        return { success: true };
      } catch (error) {
        console.error(error.message);
        return { success: false};
      }
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
