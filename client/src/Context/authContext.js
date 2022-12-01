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
      // console.log('response', response)
    const {success, error, user} = await response.json();
    console.log('err', error)
    console.log('success', success)
  if (success){
    setUser(user);
   
  } else {console.log('invalid token')}
    } catch (error) {
      console.error(error.message);
   
    }
  }
};
  

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
    const { success, error, token } = await res.json();
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
    const { success, token, error } = await res.json();
    localStorage.setItem("jwt", token);
    getUser()
    return { success, error };
  };
  // console.log("loged in user", user);

  // updateProfileHeader
  const updateProfileHeader = async (profile_header) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login first" };
    } else {
      const body = { profile_header };
      // console.log('body', body)
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
        // console.log('response', response)
      const {success, error} = await response.json();
      // console.log('err', error)
      // console.log('success', success)
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
        // console.log('body', body)
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
          // console.log('response', response)
        const {success} = await response.json();
       
        // console.log('success', success)
      if (success){
        setUser({ ...user, profile_description });
        return { success }
      }
        } catch (error) {
          console.error(error.message);
        }
      }
    };


// send message to another user
   const sendMessage = async (receiver_id, mssg_title, mssg_text, receiver_name) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login firsrt" };
    } else {
      /* create the req.body for the backend */
      const body = { receiver_id , mssg_title, mssg_text, receiver_name};
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify(body),
        };
        const response = await fetch(
          `${backendUrl}/api/users/message`,
          options
        );
        console.log('response', response)
      const {success} = await response.json();
     
      console.log('success', success)
    if (success){
      // setMessages({...messages});
      // console.log('set Messages', messages)
      return { success }
    }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  // read sent messages
  const [messages, setMessages] = useState();
  const readSentMessages = async () => {
    
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login firsrt" };
    } else {
      
      try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
         
        };
        const response = await fetch(
          `${backendUrl}/api/users/inboxSent`,
          options
        );
        const jsonData = await response.json();
      
        setMessages(jsonData);
        console.log('readSentMessages',jsonData); //ok
      
       
      } catch (error) {
        console.error(error.message);
      }
    }
  };

   useEffect(() => {
    readSentMessages()
  }, [user]) // trigger action on load
// }, [messages]) // trigger action on load
  console.log('messages',messages); 
 
// read sent messages
const [messagesReceived, setMessagesReceived] = useState();
const getReceivedMessages = async () => {
  
  const jwt = localStorage.getItem("jwt");
  if (jwt === "") {
    return { success: false, error: "login firsrt" };
  } else {
    
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt}`,
        },
       
      };
      const response = await fetch(
        `${backendUrl}/api/users/inboxReceived`,
        options
      );
      const jsonData = await response.json();
    
      setMessagesReceived(jsonData);
      // console.log('readSentMessages',jsonData); //ok
    
     
    } catch (error) {
      console.error(error.message);
    }
  }
};

 useEffect(() => {
  getReceivedMessages ()
}, [user]) // trigger action on load
console.log('messagesReceived',messagesReceived); 


// save users to favorites
const [favorites, setFavorites] = useState(null);

const newFavorite = async (user_id) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt === "") {
    return { success: false, error: "login firsrt" };
  } else {
    /* create the req.body for the backend */
    const body = {user_id};
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt}`,
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        `${backendUrl}/api/users/postFavorites`,
        options
      );
      console.log('response', response)
    const {success} = await response.json();
   
    console.log('success', success)
  if (success){
      // setFavorites({...favorites});
    return { success }
  }
    } catch (error) {
      console.error(error.message);
    }
  }
};





  // delete User
  const deleteUser = async (user) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      console.log('no token')
    } else {
      try {
        const options = {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${jwt}`,
          },
        };
        const response = await fetch(
          `${backendUrl}/api/users/delete`,
          options
        );
        console.log('response', response)
      const {success, user} = await response.json();
      console.log('success', success)
    if (success){
      setUser(user);
      return { success }
    } else {console.log('invalid token')}
      } catch (error) {
        console.error(error.message);
      }
    }

  }

  return (
    <AuthContext.Provider
      value={{ setUser, 
        user, 
        register, login, 
        updateProfileHeader, updateProfileDescription, 
        getUser, 
        deleteUser, 
        sendMessage,
        messages, 
        readSentMessages, 
        messagesReceived, 
        newFavorite}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
