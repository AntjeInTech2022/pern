import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Contacts, GetContacts, Messages, MessagesReceived, User } from '../@types';


const backendUrl = "http://localhost:5000";


export type AuthContextValue = {
  user: User | null
  setUser: (user: User | null ) => void
  register: (email: string, password: string, name: string) => Promise<{ success: boolean, error: string }>
  login: (email: string, password: string) => Promise<{ success: boolean, error: string }>
  getUser: () => Promise<{ success: boolean, error: string} | void> 
  updateProfileHeader: (profile_header: string) => Promise<{success: boolean, error: string }>
  updateProfileDescription: (profile_description: string) => Promise<{success: boolean, error: string }>
  sendMessage: (receiver_id: string, mssg_title: string, mssg_text: string, receiver_name: string) => Promise<{ success: boolean, error: string}> 
  messages: Messages | null
  readSentMessages: () => Promise<{ success: boolean, error: string}> 
  messagesReceived: MessagesReceived | null
  getReceivedMessages: () => Promise<{ success: boolean, error: string}> 
  newFavorite: (user_id: string) => Promise<{ success: boolean, error: string}>
  getSavedContacts: () => Promise<{ success: boolean, error: string}> 
  contacts: Contacts | null
  deleteMessageSent: (mssg_id: number) => Promise<{ success: boolean, error: string}> 
  // deleteUser: () => Promise<{ success: boolean, error: string}> 
}

const initialAuth: AuthContextValue = {
  user: null,
  setUser: () => { throw new Error('setUser not implemented.'); },
  register: () => { throw new Error('register not implemented.'); },
  login: () => { throw new Error('login not implemented.'); },
  getUser: () => { throw new Error('get user not implemented'); },
  updateProfileHeader: () => { throw new Error('update Profile header not implemented'); },
  updateProfileDescription: () => { throw new Error('update Profile description not implemented'); },
  messages: null,
  messagesReceived: null,
  sendMessage:  () => { throw new Error('sendMessage not implemented'); },
  readSentMessages: () => { throw new Error('readSendMessage not implemented'); },
  getReceivedMessages: () => { throw new Error('getReiveddMessage not implemented'); },
  newFavorite: () => { throw new Error('newFaroite not implemented'); },
  getSavedContacts: () => { throw new Error('getSavedContacts not implemented'); },
  contacts: null,
  deleteMessageSent: () => { throw new Error('deleteMessageSent not implemented'); },
}
  // deleteUser:() => { throw new Error('deleteUser not implemented'); },


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
    return { success: true, error: "" };
  } else {
    console.log('invalid token')
    return { success: false, error: "db error" };}
    } catch (error) {
      console.error(error.message);
      return { success: false, error: error.message }
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
      // setUser({ ...user, profile_header});
      getUser()
      return { success: true, error: "" };
    }  else {
      return { success: false, error: "db error" };
    }
      } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message }
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
        // setUser({ ...user, profile_description });
        getUser()
        return { success: true, error: "" };
      }
        else {
          return { success: false, error: "db error" };
        }
      }
         catch (error) {
          console.error(error.message);
          return { success: false, error: error.message }
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
      readSentMessages()
      return { success: true, error: "" };
    } else {
      return { success: false, error: "db error" };
    }
      } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message }
      }
    }
  };

  // read sent messages
  const [messages, setMessages] = useState<Messages | null>(initialAuth.messages)

  const readSentMessages = async () => {
    // console.log('user', user)
    const jwt = localStorage.getItem("jwt");
    if (jwt === "") {
      return { success: false, error: "login firsrt" };
    } else { try {
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
        const {messages, success, error} = await response.json();
        if (success){
        setMessages(messages);
        console.log('readSentMessages',messages); //ok
        return { success: true, error: "" };
      } else {
        console.log('error', error)
        return { success: false, error: "db error" };
      }}
       catch (error) {
        console.error(error.message);
        return { success: false, error: error.message }
      }
    }
  };

   useEffect(() => {
    user &&
    readSentMessages()
  }, [user])
  // console.log('messages',messages); 

 
// read sent messages
const [messagesReceived, setMessagesReceived] = useState<MessagesReceived | null>(initialAuth.messagesReceived)

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
      const {messagesReceived, success, error} = await response.json();
      if (success){
      setMessagesReceived(messagesReceived);
      return { success: true, error: "" };
    }   else {
      return { success: false, error: "db error" };
    }} catch (error) {
      console.error(error.message);
      return { success: false, error: error.message }
    }
  }
};

 useEffect(() => {
  getReceivedMessages ()
}, [user]) 
// console.log('messagesReceived',messagesReceived); 


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
    getSavedContacts()
      return { success: true, error: "" };
  } else {
    return { success: false, error: "db error" };
  }
    } catch (error) {
      console.error(error.message);
      return { success: false, error: error.message }
    }
  }
};

//GET SAVED CONTACTS
const [contacts, setSavedContacts] =  useState<Contacts | null>(initialAuth.contacts)
const getSavedContacts = async () => {
  
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
        `${backendUrl}/api/users/savedContacts`,
        options
      );
      const {getContacts, success, error} = await response.json();
      if (success){
      setSavedContacts(getContacts);
      return { success: true, error: "" };
    } else {
      return { success: false, error: "db error" };
    } } catch (error) {
      console.error(error.message);
      return { success: false, error: error.message }
    }
  }
};

 useEffect(() => {
  getSavedContacts ()
}, [user])


  // delete User
  const deleteMessageSent = async (mssg_id: number) => {
    const jwt = localStorage.getItem("jwt");
  if (jwt === "") {
    return { success: false, error: "login first" };
  } else {
    /* create the req.body for the backend */
    const body = {mssg_id};
    console.log('mssg_id', mssg_id)
      try {
        const options = {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body),
        };
        const response = await fetch(
          `${backendUrl}/api/users/deleteMessageSent`,
          options
        );
        // console.log('response', response)
      const {success} = await response.json();
     
      console.log('success', success)
    if (success){
      readSentMessages()
        return { success: true, error: "" };
    } else {
      return { success: false, error: "db error" };
    }
      } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message }
      }
    }
  };
  

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        setUser,
        register, 
        login, 
        updateProfileHeader, 
        updateProfileDescription, 
        getUser, 
        sendMessage,
        messages, 
        readSentMessages, 
        messagesReceived,
        getReceivedMessages,
        newFavorite,
        getSavedContacts,
        contacts,
        deleteMessageSent
        // deleteUser
      }}
  >
      {children}
    </AuthContext.Provider>
  );
};
