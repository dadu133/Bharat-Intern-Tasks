import React, { useState } from 'react';
import './App.css';
function Ftok() {
  function clr(){
    setText1('')
    setText2('')
  } 
  const[text1,setText1]=useState('')
  const[check,setCheck]=useState(0)
  const[text2,setText2]=useState('')
  function change1(evt) {
    setText1(evt.target.value)
      setCheck(1);
    }
  function change2(evt) {
    setText2(evt.target.value)
   setCheck(2);
    }
   function display()
   {
       if(check==2)
       {
           let num=(Number(text2)-273.15)*9/5+32;
           setText1(num)
           setCheck(0)
       }
       else if (check==1) {
        let num=(Number(text1)-32)*5/9+273.15;
        setText2(num)
        setCheck(0);
       }
       else{
        alert("Invalid!! selection")
       }
   }
  return(
    <>
    <div className='container-ftok' style={{border:'3px solid black'}}>
      <h2>Farenheit to Kelvin</h2><br/><br/>
    <label htmlFor='ftoc'>Farenheit</label>
    <input type='text' name='ftoc' value={text1} onChange={change1}></input><br/><br/>
    <label htmlFor='ftok'>Kelvin</label>
    <input type='text' name='ftok' value={text2} onChange={change2}></input><br/><br/>
 <button onClick={display}>Calculate</button>
 <button onClick={clr}>Clear</button>
    </div>
    </>
  )
  
}

function Ftoc() {
  function clr(){
    setText1('')
    setText2('')
  }
  const[text1,setText1]=useState('')
  const[check,setCheck]=useState(0)
  const[text2,setText2]=useState('')
  function change1(evt) {
    setText1(evt.target.value)
      setCheck(1);
    }
  function change2(evt) {
    setText2(evt.target.value)
   setCheck(2);
    }
   function display()
   {
       if(check==2)
       {
           let num=(Number(text2))*(9/5)+32;

           setText1(num)
           setCheck(0)
       }
       else if (check==1) {
        let num=(Number(text1)-32)*5/9;
        setText2(num)
        setCheck(0);
       }
       else{
        alert("Invalid!! selection")
       }
   }
  return(
    <>
    <div className='container-ftok' style={{border:'3px solid black'}}>
      <h2>Farenheit to Celsius</h2><br/><br/>
    <label htmlFor='ftoc'>Farenheit</label>
    <input type='text' name='ftoc' value={text1} onChange={change1}></input><br/><br/>
    <label htmlFor='ftok'>Celsius</label>
    <input type='text' name='ftok' value={text2} onChange={change2}></input><br/><br/>
 <button onClick={display}>Calculate</button>
 <button onClick={clr}>Clear</button>
 </div>
    </>
  )
  
}

function Ctok() {
  function clr(){
    setText1('')
    setText2('')
  }
  const[text1,setText1]=useState('')
  const[check,setCheck]=useState(0)
  const[text2,setText2]=useState('')
  function change1(evt) {
    setText1(evt.target.value)
      setCheck(1);
    }
  function change2(evt) {
    setText2(evt.target.value)
   setCheck(2);
    }
   function display()
   {
       if(check==2)
       {
        // let num=(Number(text1)-32)*5/9+273.15;
           let num=Number(text2)-273.15;
           setText1(num)
           setCheck(0)
       }
       else if (check==1) {
        let num=Number(text1)+273.15;
        setText2(num)
        setCheck(0);
       }
       else{
        alert("Invalid!! selection")
       }
   }
  return(
    <>
    <div className='container-ftok' style={{border:'3px solid black'}}>
      <h2>Celsius to Kelvin</h2><br/><br/>
    <label htmlFor='ftoc'>Celsius</label>
    <input type='text' name='ftoc' value={text1} onChange={change1}></input><br/><br/>
    <label htmlFor='ftok'>Kelvin</label>
    <input type='text' name='ftok' value={text2} onChange={change2}></input><br/><br/>
 <button onClick={display}>Calculate</button>
 <button onClick={clr}>Clear</button>
 </div>
    </>
  )

  
}

function Allc() {
  function clr(){
    setText1('')
    setText2('')
    setText3('')
  }
  const[text1,setText1]=useState('')
  const[check,setCheck]=useState(0)
  const[text2,setText2]=useState('')
  const[text3,setText3]=useState('')
  
  function change1(val) {
    setText1(val.target.value);
    setCheck(1);

  }
  function change2(val) {
    setText2(val.target.value)
    setCheck(2)
  }

  function change3(val) {
    setText3(val.target.value)
    setCheck(3)
  }
  function display() {
    if (check == 1) {
      let num=(Number(text1)-32)*5/9;
      let num1=(Number(text1)-32)*5/9+273.15;
      setText2(num)
      setText3(num1)
      setCheck(0)
    }
    else if (check == 2) {
let num=Number(text2)*(9/5)+32;
let num1=Number(text2)+273.15;
      setText1(num)
      setText3(num1)
      setCheck(0)
    }
    else if(check==3){
      let num=(Number(text3)-273.15)*9/5+32;
      let num1=Number(text3)-273.15;
      setText1(num)
      setText2(num1)
      setCheck(0)
    }
    else{
      alert("Invalid command")
    }
  }
  
  
  return(
    <>
    <div className='container-ftok' style={{border:'3px solid black'}}>
      <h2>All the three conversion of temperature units</h2><br/><br/>
    <label htmlFor='ftoc'>Farenheit</label>
    <input type='text' name='ftoc' value={text1} onChange={change1}></input><br/><br/>
    <label htmlFor='ftok'>Celsius</label>
    <input type='text' name='ftok' value={text2} onChange={change2}></input><br/><br/>
    <label htmlFor='ftok'>Kelvin</label>
    <input type='text' name='ftok' value={text3} onChange={change3}></input><br/><br/>
 <button onClick={display}>Calculate</button>
 <button onClick={clr}>Clear</button>
 </div>
    </>
  )
  
}

function Choice() {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  return (
    <>
<h2 style={{color:'black',backgroundColor:' #ffbd67',textDecoration:'none',padding:'5px'}}>Choose the appropriate choice from below option</h2>
<span>Farenheit to Celsius or Vice Versa</span><input type='checkbox' checked={check1} onChange={()=>{setCheck1(!check1)}}></input><br/><br/><hr></hr>
<span>Farenheit to Kelvin or Vice Versa</span><input type='checkbox' style={{padding:'1em'}} checked={check2} onChange={()=>{setCheck2(!check2)}}></input><br/><br/><hr></hr>
<span>Celsius to Kelvin or Vice Versa</span><input type='checkbox' style={{padding:'1em'}} checked={check3} onChange={()=>{setCheck3(!check3)}}></input><br/><br/><hr></hr>
<span>All the three conversion or Vice Versa</span><input type='checkbox' style={{padding:'1em'}} checked={check4} onChange={()=>{setCheck4(!check4)}}></input>
<br></br><br></br><hr></hr>
{check1?<Ftoc></Ftoc>:''}
{check2?<Ftok></Ftok>:''}
{check3?<Ctok></Ctok>:''}
{check4?<Allc></Allc>:''}

    </> 
  );
}

export default Choice;
