import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateName} from "./userSlice.js";
import Button from "../../ui/Button.jsx";

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600" >👋 Welkom! Begin met het vertellen van uw naam:</p>

      <input
        type="text"
        placeholder="Uw volledige naam"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 h-10 mb-8 input"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
