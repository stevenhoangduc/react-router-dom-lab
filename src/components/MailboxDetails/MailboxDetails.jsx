// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams }  from "react-router";
import "../../index.css";

 


const MailboxDetails = (props) => {
  // always vierify that the props are passed in correctly
  console.log(props);

  const {mailBoxId } = useParams();
  const selectedlbox = props.mailboxes.find((mailbox) => {
   return mailbox._id === Number(mailBoxId);
  
  });


  console.log(selectedlbox);
  return (
    <div className= "mail-box">
     
        
      
   
      <h2> selectedlbox </h2>
      <dl>
      <p>_id: { selectedlbox._id}</p>
      <p>Name: {selectedlbox.name}</p>
      <p>Location: {selectedlbox.location}</p>
      <p>Box Size: {selectedlbox.boxSize}</p>
      </dl>
    </div>
  )


   
  };
  
  export default MailboxDetails;