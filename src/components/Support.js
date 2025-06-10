import React from 'react'
import { useNavigate } from 'react-router-dom'

 const Support = () => {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/Labs");
  }
  return (
    <div>
      <div>
        This is  support page 
    </div>

    <button onClick={clickHandler}>Move to labs page</button>
    </div>
    
  )
}

export default Support