import React, { useState } from 'react';

function CreateNewUser() {
  const [user_name, setUserName] = useState('');

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { user_name };
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        value={user_name}
        onChange={handleNameChange}
      />
      <button>Create new user</button>
    </form>
  );
}

export default CreateNewUser;
