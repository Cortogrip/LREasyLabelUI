import {useRef} from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function MyTest(){

  // const inputRef = useRef(null);

  const [xpos, setXpos] = useState(0);

  const handleBtnClick = () => {
    console.log(xpos);
  };

  return (
    <div>
      <TextField className="inputField" id="xpos" name="xpos" label="X Position"  defaultValue={xpos}  onChange={event => {setXpos(event.target.value);}} />
      {/* {<input ref={inputRef} placeholder="Enter name"/>} */}
      <button onClick={handleBtnClick}>Log value</button>
    </div>
  );
}