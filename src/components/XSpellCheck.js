
import React, { useState } from 'react';


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');


  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    
    const words = newText.split(/\s+/);
    for (let word of words) {
      const correctedWord = checkSpelling(word.toLowerCase());
      if (correctedWord) {
        setCorrection(`Did you mean: ${correctedWord}?`);
        return;
      }
    }
    setCorrection(''); 
  };

  
  const checkSpelling = (word) => {
    for (let key in customDictionary) {
      if (key.toLowerCase() === word.toLowerCase()) {
        return customDictionary[key];
      }
    }
    return null;
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        rows="6"
        cols="50"
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
