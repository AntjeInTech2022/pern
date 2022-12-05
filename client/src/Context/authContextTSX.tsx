import React, { createContext, useState, useEffect, ReactNode } from 'react';

const backendUrl = "http://localhost:5000";


export type AuthContextValue = {
  user: User | null
  register: (email: string, password: string, name: string) => Promise<{ success: boolean, error: string }>
  login: (email: string, password: string) => Promise<{ success: boolean, error: string }>
  getUser: () => Promise<{ success: boolean, error: string}> 
  updateProfileHeader: (profile_header: string) => Promise<{success: boolean, error: string }>
  updateProfileDescription: (profile_description: string) => Promise<{success: boolean, error: string }>
  sendMessage: (receiver_id: string, mssg_title: string, mssg_text: string, receiver_name: string) => Promise<{ success: boolean, error: string}> 
  messages: Messages | null
  readSentMessages: () => Promise<{ success: boolean, error: string}> 
  messagesReceived: MessagesReceived | null
  getReceivedMessages: () => Promise<{ success: boolean, error: string}> 
  newFavorite: (user_id: string) => Promise<{ success: boolean}>
}

const initialAuth: AuthContextValue = {
  user: null,
  register: () => { throw new Error('register not implemented.'); },
  login: () => { throw new Error('login not implemented.'); },
  getUser: function (): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  updateProfileHeader: function (profile_header: string): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  updateProfileDescription: function (profile_description: string): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  messages: null,
  messagesReceived: null,
  sendMessage: function (): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  readSentMessages: function (): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  getReceivedMessages: function (): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  },
  newFavorite: function (user_id: string): Promise<{ success: boolean; error: string; }> {
    throw new Error('Function not implemented.');
  }
}

// 2. Create Context / Global Store
export const AuthContext = createContext<AuthContextValue>(initialAuth)

// 3. Create provider  AUTHENTICATOR
export const AuthProvider = ({ children }: { children: ReactNode }) => {
   // ** State
  const [user, setUser] = useState<User | null>(initialAuth.user)

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
  const register = async (name: string, email: string, password: string) => {
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
  const login = async (email: string, password: string) => {
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
  const updateProfileHeader = async (profile_header: string) => {
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
      setUser({ ...user, profile_header});
      return { success }
    }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

    // updateProfileHeader
    const updateProfileDescription = async (profile_description: string) => {
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
   const sendMessage = async (receiver_id: string, mssg_title: string, mssg_text: string, receiver_name: string) => {
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
      const {success, error} = await response.json();
     
      console.log('success', success)
    if (success){
      // setMessages({...messages});
      // console.log('set Messages', messages)
      readSentMessages()
      return { success }
    }
      } catch (error) {
        return {error }
        // console.error(error.message);
      }
    }
  };

  // read sent messages
  const [messages, setMessages] = useState()


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


// ADD USER TO SAVED CONTACTS
const newFavorite = async (user_id: string) => {
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


  

  return (
    <AuthContext.Provider
      value={{ 
        setUser, 
        user, 
        register, 
        login, 
        updateProfileHeader, 
        updateProfileDescription, 
        getUser, 
        sendMessage,
        messages, 
        readSentMessages, 
        messagesReceived,
        newFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
};
