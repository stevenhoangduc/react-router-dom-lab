// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm";

import {Route, Routes} from "react-router";

const initialState = [ 
  { _id: 1, name: "Trang", location: "SaiGon", boxSize: "Large" },
  { _id: 2, name: "Thuy", location: "Hue", boxSize: "Large" }, 
  { _id: 3, name: "Hanh", location: "Nha Trang", boxSize: "Large" },
  { _id: 2, name: "Huong", location: "SaiGon", boxSize: "Large" }, 
  { _id: 3, name: "Ging", location: "Phillippines", boxSize: "Large" },
];



const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);
// lifting state function
  function addBox(newMailboxData) {
     newMailboxData._id = mailboxes.length + 1;
     // update state
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
    <>
      <NavBar />
    
      <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailbox/new" element={<MailboxForm addMailbox={addBox} />} />
        <Route path="/mailboxes/:mailBoxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Double check</h2>} />
      </Routes>
    </>
  )
};

export default App;
