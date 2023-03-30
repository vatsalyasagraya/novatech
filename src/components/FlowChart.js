import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useRef } from 'react';
import "./flowchart.css"

function FlowChart() {
    const refA=useRef("null");
    const refB=useRef("null");
    
    const [a, setA] = useState("");
    const [b, setB] = useState("");

    function handleClick(){
        let command=a.split(" ")[0];
        let num=Number(a.split(" ")[1]);    
        console.log(num);
        refA.current.value=num;
    }

    return(
    <>
        <div className='flowchart'>
            <div className='grid'>
                <TextField id="outlined-read-only-input" multiline rows={3} label="PC" variant="filled"  className='pc' style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0"/>
                <svg width="150" height="50"><line x1="75" y1="0" x2="75" y2="100" stroke="black"/></svg>
                <TextField id="outlined-basic" multiline rows={3}label="MAR" variant="filled" className='mar' style = {{width: 150}}/>
                <svg width="150" height="50"><line x1="75" y1="0" x2="75" y2="100" stroke="black"/></svg>
                <TextField id="outlined-basic" multiline rows={3}label="RAM" variant="filled" className='ram' style = {{width: 150}} onChange={(e) => {setA(e.target.value);}} />
            </div>
            <div className='grid'>
                <svg width="50" height="400">
                    <line x1="0" y1="350" x2="25" y2="350" stroke="black"/>
                    <line x1="25" y1="200" x2="25" y2="350" stroke="black"/>
                    <line x1="25" y1="200" x2="50" y2="200" stroke="black"/>
                </svg>
            </div>
            <div div className='grid'>
                <svg width="50" height="300">
                    <line x1="0" y1="200" x2="100" y2="200" stroke="black"/>
                </svg>
            </div>
            <div className='grid'>
                <TextField id="outlined-read-only-input" multiline rows={3} label="B" variant="filled"  inputRef={refB} style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0"/>
                <svg width="150" height="303">
                    <line x1="0" y1="97.5" x2="206" y2="97.5" stroke="black"/>
                    <line x1="75" y1="0" x2="75" y2="97.5" stroke="black"/>
                </svg>
                
            </div>
            <div div className='grid'>
                <svg width="50" height="300">
                    <line x1="0" y1="200" x2="100" y2="200" stroke="black"/>
                </svg>
            </div>
            <div className="grid">
                <TextField id="outlined-read-only-input" multiline rows={3} label="A" variant="filled"  inputRef={refA} style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0" />
                <svg width="150" height="303">
                    <line x1="0" y1="97.5" x2="206" y2="97.5" stroke="black"/>
                    <line x1="75" y1="0" x2="75" y2="97.5" stroke="black"/>
                </svg>
            </div>
            <div div className='grid'>
                <svg width="50" height="300">
                    <line x1="0" y1="200" x2="100" y2="200" stroke="black"/>
                    <line x1="0" y1="20" x2="100" y2="20" stroke="black"/>
                    <line x1="25" y1="200" x2="25" y2="60" stroke="black"/>
                    <line x1="25" y1="60" x2="100" y2="60" stroke="black"/>
                </svg>
            </div>
            <div className='grid'>
                <div className='alu'>ALU</div>
                <svg width="200" height="50"></svg>
                <TextField id="outlined-basic" multiline rows={2}label="IR" variant="filled" className='ir' style = {{width: 150}}/>
                <svg width="200" height="70"><line x1="75" y1="0" x2="75" y2="100" stroke="black"/></svg>
                <TextField id="outlined-basic" multiline rows={3}label="ROM" variant="filled" className='rom' style = {{width: 150}}/>
            </div>
        </div>
        <div className="buttons">
        <Button variant="contained" onClick={handleClick}>Execute</Button>
        <Button variant="contained">Next</Button>
        <Button variant="contained">Reset</Button>
        </div>
    </>
    )
  };

export default FlowChart
