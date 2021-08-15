import React, {useState} from 'react';

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
       <h2>{value}</h2>
       <input 
      type="text" 
      placeholder="поиск по имени.."
      value={value} 
      onChange={e => setValue(e.target.value)}
       />
    </div>
  );
};
