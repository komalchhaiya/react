import React, { useState } from 'react';

function ClickButton() {
const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button onClick={handleClick}>
      {clicked ? 'Clicked!' : 'Not Clicked'}
    </button>
  );
}

export default ClickButton;
