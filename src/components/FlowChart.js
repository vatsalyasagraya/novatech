import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useRef } from 'react';
import "./flowchart.css"

function FlowChart() {
    const refA=useRef("null");
    const refB=useRef("null");
    const refIr=useRef("null");
    const refRAM=useRef("null");
    const refROM=useRef("null");
    const refMAR=useRef(0);
    const refPC=useRef(0);

    const [a, setA] = useState("");
    const [b, setB] = useState("");

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      
    async function handleClick(){

        const decimalA = parseInt(refA.current.value, 2);
        const decimalB = parseInt(refB.current.value, 2);
        //const dPC= parseInt(refPC.current.value, 2);
        let command=a.split(" ")[0];
        
        switch (command) 
        {
            case "MVI":
                /////////////////////////////////////////////////
                refROM.current.value="T0: PC(E), MAR(E,L)\n";
                refPC.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refPC.current.style.color = 'white';
                await delay(2000);
                refPC.current.style.backgroundColor = 'transparent';
                refPC.current.style.color = 'black';
                refMAR.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refMAR.current.style.color = 'white';
                refMAR.current.value=parseInt(refPC.current.value);
                await delay(1700);
                refMAR.current.style.backgroundColor = 'transparent';
                refMAR.current.style.color = 'black';
                //////////////////////////////////////////////////
                refROM.current.value+="T1: PC(I), RAM(E), IR(L)\n";
                refPC.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refPC.current.style.color = 'white';
                refPC.current.value=parseInt(refPC.current.value)+1;
                refRAM.current.style.backgroundColor='rgba(0, 128, 0, 0.568)';
                refRAM.current.style.color='white';
                await delay(1500);
                refRAM.current.style.backgroundColor = 'transparent';
                refRAM.current.style.color = 'black';
                refIr.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refIr.current.style.color = 'white';
                refIr.current.value="MVI";
                refPC.current.style.backgroundColor = 'transparent';
                refPC.current.style.color = 'black';
                refMAR.current.value=parseInt(refPC.current.value);
                await delay(1700);
                refIr.current.style.backgroundColor = 'transparent';
                refIr.current.style.color = 'black';
                //////////////////////////////////////////////////
                refROM.current.value+="T2:PC(E), MAR(E,L)\n";
                refPC.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refPC.current.style.color = 'white';
                await delay(1500);
                refPC.current.style.backgroundColor = 'transparent';
                refPC.current.style.color = 'black';
                refMAR.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refMAR.current.style.color = 'white';
                refMAR.current.value=parseInt(refPC.current.value);
                await delay(1700);
                refMAR.current.style.backgroundColor = 'transparent';
                refMAR.current.style.color = 'black';
                ///////////////////////////////////////////
                refROM.current.value+="T3: PC(I), RAM(E), A(L)\n";
                refPC.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refPC.current.style.color = 'white';
                refPC.current.value=parseInt(refPC.current.value)+1;
                refRAM.current.style.backgroundColor='rgba(0, 128, 0, 0.568)';
                refRAM.current.style.color='white';
                await delay(1500);
                refRAM.current.style.backgroundColor = 'transparent';
                refRAM.current.style.color = 'black';
                refA.current.style.backgroundColor = 'rgba(0, 128, 0, 0.568)';
                refA.current.style.color = 'white';
                let num=a.split(" ")[1];    
                refA.current.value=num;
                refPC.current.style.backgroundColor = 'transparent';
                refPC.current.style.color = 'black';
                refMAR.current.value=parseInt(refPC.current.value);
                await delay(1700);
                refA.current.style.backgroundColor = 'transparent';
                refA.current.style.color = 'black';
                ////////////////////////////////////////////
                refROM.current.value+="T4:\n";
                await delay(1100);
                ///////////////////////////////////////////
                refROM.current.value+="T5:\n";
                await delay(1100);
                ////////////////////////////////////////////
                refROM.current.value+="T6: \n";
                await delay(1100);
                //////////////////////////////////////////////
                break;
            case "MOV":
                if(a.split(" ")[1]=="B,A")
                {
                    refB.current.value=refA.current.value;
                }
                else if(a.split(" ")[1]=="A,B")
                {
                    refA.current.value=refB.current.value;   
                }         
                break;
            case "ADD":
                const decimalSum = decimalA + decimalB;
                refA.current.value = decimalSum.toString(2);
                break;
            case "AND":
                refA.current.value=(decimalA&decimalB).toString(2);
                break;
            default:
                refA.current.value="Incorrect Command";
                break;
            }
        refROM.current.value="";
        refPC.current.value="0";
        refMAR.current.value="0";
        refRAM.current.value="";
        refRAM.current.focus();
    }
    function reset(){
        refA.current.value="";
        refB.current.value="";
        refRAM.current.value="";
        refROM.current.value="";
        refPC.current.value="0";
        refMAR.current.value="0";
        refIr.current.value="";
    }

    return(
    <>
        <div className='flowchart'>
            <div className='grid' sx={{padding:"0%",margin:0,backgroundColor: "green"}}>
                <TextField id="outlined-read-only-input" multiline rows={3} label="PC" variant="filled"  inputRef={refPC} className='pc' sx = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0"/>
                <svg width="150" height="98"><line x1="75" y1="0" x2="75" y2="98" stroke="black"/></svg>
                <TextField id="outlined-read-only-input" multiline rows={3}label="MAR" variant="filled" inputRef={refMAR} className='mar' style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0"/>
                <svg width="150" height="98"><line x1="75" y1="0" x2="75" y2="98" stroke="black"/></svg>
                <TextField id="outlined-basic" multiline rows={3}label="RAM" variant="filled" inputRef={refRAM} className='ram' style = {{width: 150}} onChange={(e) => {setA(e.target.value);}} />

            </div>
            <div className='grid'>
                <svg width="50" height="500">
                    <line x1="0" y1="430" x2="25" y2="430" stroke="black"/>
                    <line x1="25" y1="200" x2="25" y2="430" stroke="black"/>
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
                <svg width="150" height="403" >
                    <line x1="0" y1="97.75" x2="206" y2="97.75" stroke="black"/>
                    <line x1="75" y1="0" x2="75" y2="97.75" stroke="black"/>
                </svg>
                
            </div>
            <div div className='grid'>
                <svg width="50" height="300">
                    <line x1="0" y1="200" x2="100" y2="200" stroke="black"/>
                </svg>
            </div>
            <div className="grid">
                <TextField id="outlined-read-only-input" multiline rows={3} label="A" variant="filled"  inputRef={refA} style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0" />
                <svg width="150" height="403">
                    <line x1="0" y1="97.75" x2="206" y2="97.75" stroke="black"/>
                    <line x1="75" y1="0" x2="75" y2="98" stroke="black"/>
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
                <TextField id="outlined-read-only-input" multiline rows={2} label="IR" variant="filled" className='ir' inputRef={refIr} style = {{width: 150}} InputProps={{readOnly: true,}} defaultValue="0"/>
                <svg width="200" height="70"><line x1="75" y1="0" x2="75" y2="100" stroke="black"/></svg>
                <TextField id="outlined-read-only-input" multiline rows={7} label="ROM" variant="filled" className='rom' inputRef={refROM} style = {{width: 270}} InputProps={{readOnly: true,}} defaultValue="0"/>
            </div>
        </div>
        <div className="buttons">
        <Button variant="contained" onClick={handleClick}>Execute</Button>
        <Button variant="contained">Next</Button>
        <Button variant="contained" onClick={reset}>Reset</Button>
        </div>
    </>
    )
  };

export default FlowChart
