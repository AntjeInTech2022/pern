import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createTheme} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { TextInput } from "./TextInput"
import { MessageLeft, MessageRight } from "./Message";


    // paper: {
    //           width: "80vw",
    //           height: "80vh",
    //           maxWidth: "500px",
    //           maxHeight: "700px",
    //           display: "flex",
    //           alignItems: "center",
    //           flexDirection: "column",
    //           position: "relative"
    //         },
            // paper2: {
            //   width: "80vw",
            //   maxWidth: "500px",
            //   display: "flex",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   position: "relative"
            // },
            // container: {
            //   width: "100vw",
            //   height: "100vh",
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center"
            // },
            // messagesBody: {
            //   width: "calc( 100% - 20px )",
            //   margin: 10,
            //   overflowY: "scroll",
            //   height: "calc( 100% - 80px )"
            // }


export default function Chat() {
    
  return (
    <div>
      <Paper 
      width= "80vw"
      height= "80vh"
      maxWidth= "500px"
      maxHeight= "700px"
      display= "flex"
      alignItems= "center"
      flexDirection= "column"
      position= "relative"
      zDepth={2}>
        <Paper id="style-1" 
        width = "calc( 100% - 20px )"
        // margin = 10
        overflowY = "scroll"
        height= "calc( 100% - 80px )"
        >
          <MessageLeft
            message="Hi!"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Tester"
            avatarDisp={true}
          />
          <MessageLeft
            message="hello"
            photoURL=""
            displayName="Test"
            avatarDisp={false}
          />
          <MessageRight
            message="Hello"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Tester"
            avatarDisp={true}
          />
          <MessageRight
            message="Hi"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Test"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}