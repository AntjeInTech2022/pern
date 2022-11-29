import { createContext, useState, useEffect } from "react";

const backendUrl = "http://localhost:5000";

// 2. Create Context / Global Store
export const AuthContext = createContext();

// AUTHENTICATOR

// 3. Create provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
  }, [])
  

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
    getUser()
  
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
    getUser()
    // setUser(user);
    // setIsAuthenticated(true);
    return { success, error };
  };
  console.log("loged in user", user);

  // updateProfileHeader
  const updateProfileHeader = async (profile_header) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login first" };
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
      const {success, error} = await response.json();
      console.log('err', error)
      console.log('success', success)
    if (success){
      setUser({ ...user, profile_header });
      return { success }
    }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

    // updateProfileHeader
    const updateProfileDescription = async (profile_description) => {
      const jwt = localStorage.getItem("jwt");
      if (jwt === "") {
        return { success: false, error: "login firsrt" };
      } else {
        const body = { profile_description };
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
            `${backendUrl}/api/users/updateProfileDescription`,
            options
          );
          console.log('response', response)
        const {success} = await response.json();
       
        console.log('success', success)
      if (success){
        setUser({ ...user, profile_description });
        return { success }
      }
        } catch (error) {
          console.error(error.message);
        }
      }
    };

  // getUser
  const getUser = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      console.log('no token')
    } else {
  
      try {
        const options = {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${jwt}`,
          },
        };
        const response = await fetch(
          `${backendUrl}/api/users/private`,
          options
        );
        console.log('response', response)
      const {success, error, user} = await response.json();
      console.log('err', error)
      console.log('success', success)
    if (success){
      setUser(user);
      
      // return { success }
    } else {console.log('invalid token')}
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ setUser, user, register, login, updateProfileHeader, updateProfileDescription, getUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
