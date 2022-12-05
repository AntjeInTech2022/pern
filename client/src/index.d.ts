declare module '*.png';

type User = { 
    pid: string
    user_name: string
    name: string
    email: string
    registration_date: string
    profile_header?: string
    profile_description?: string
    profile_picture_url?: string
    
  }
  type Users = User[]

  type Message = {
    receiver_id: string
    mssg_title: string
    mssg_text: string
    receiver_name: string
  }
  type Messages= Message[]


  type MessageReceived = {
    mssg_id: number
    created_at: string
    sender_name: string
    mssg_title: string
    mssg_text: string
  }
  type MessagesReceived= MessageReceived[]
  