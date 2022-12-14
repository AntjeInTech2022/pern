declare module '*.png';

// https://stackoverflow.com/questions/51100401/typescript-image-import:
// declare module "*.png" {
//   const value: any;
//   export = value;
// }

export type User = { 
    pid: string
    user_name: string
    name: string
    email: string
    registration_date: string
    profile_header?: string
    profile_description?: string
    profile_picture_url?: string
    
  }
 export type Users = User[]

 export type Message = {
    receiver_id: string
    mssg_title: string
    mssg_text: string
    receiver_name: string
  }
export type Messages= Message[]


export type MessageReceived = {
    mssg_id: number
    created_at: string
    sender_name: string
    mssg_title: string
    mssg_text: string
  }

export type MessagesReceived= MessageReceived[]

export type Contact = {
  user_id: string
  user_name: string
  profile_header: string
  profile_description: string
  profile_picture_url: string
}

export type Contacts= Contact[]