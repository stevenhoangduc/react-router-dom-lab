import { Link } from "react-router";




const MailboxList = (props) => {
    return  (
    <>
    <h2>Mailbox List!</h2>
    <ul>
        {props.mailboxes.map((currentMailBoxes) => (
            <li key={currentMailBoxes.name}>
                <Link to={`/mailboxes/${currentMailBoxes._id}`}>
                {currentMailBoxes.name}
                </Link>
            </li>
        ))}
    </ul>
    </>
    );
  };
  
  export default MailboxList;