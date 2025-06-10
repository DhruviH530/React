import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  const navigate = useNavigate();

  function changeHandler() {
    // move thava About page
    navigate("/About");
  }

  return (
    <div>
      <div>
        This is labs page
      </div>
      <button onClick={changeHandler}>Move to About page</button>
    </div>
  );
};

export default Labs;
