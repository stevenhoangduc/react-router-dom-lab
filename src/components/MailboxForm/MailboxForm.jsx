
import { useState } from 'react';

import { useNavigate } from 'react-router';

const initialState = {
  _id: '',
  name: '',
  location: '',
  boxSize: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = (event) => ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // const handleChange = (event) => {
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

 


    return (
      <div>
        <h2>Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="_id">_id:</label>
          <input
            type="text"
            id="_id"
            name="_id"
            value={formData._id}
            onChange={handleChange}
          />
          
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          
          <label htmlFor="boxSize">Box Size:</label>
          <input
            type="text"
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default MailboxForm;