import React from 'react';
import { useState } from 'react';
// import { Outlet, Link } from "react-router-dom";


export default function TextForm(props) {
    const [text, setText] = useState('');

    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showMessage("success","your text is converted to uppercase");
    }
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showMessage("success","your text is converted to lowercase");

    }
    const reverseCase = ()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showMessage("success","your text is converted to reversecase");

    }
    const clearText = ()=>{
        let newText = "";
        setText(newText);
        props.showMessage("success","your text has been clear");

    }
    const removeExtraSpace = ()=>{
        const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');
        let newText = removeExtraSpace(text);
        setText(newText);
        props.showMessage("success","extra space has been removed");
    }
    const copy = async () => {
        await navigator.clipboard.writeText(text);
        props.showMessage("success","your text has been copy");
      }
    const textOnChange = (e)=>{
        setText(e.target.value);
    }  
    
    // here are all logical program
    // word counter code
    let word,wordCounter,space,charecter,charecterWithOutSpace,textArray,commonWordCounter;
    charecter = text.length;
    word = text.split(/\s+/);
    // wordCounter = 0;
    // word.forEach((e)=>{
    //     if (e.trim() !=="") {
    //         wordCounter++;
    //     }
    // })
    wordCounter = word.filter((e)=>{return e.length !==0}).length;

    // space counter code
    space = word.length-1;
    charecterWithOutSpace = 0;
    textArray = text.split('');
    textArray.forEach((e)=>{
        if (e !== " ") {
            charecterWithOutSpace++;
        }
    })


    // uniqeWord counter program
    // uniqeWordCounter = 0;
    // commonWordCounter = 0;
    // let commonWordLIst = [];

    // for (let i = 0; i < word.length; i++) {
    //     for (let j = i+1; j < word.length; j++) {
    //         if (word[i] === word[j]) {
    //             commonWordLIst.push(word[i]);
    //             commonWordCounter++;
    //             break;
    //         }else{
    //             continue;
    //         }
            
    //     }
        
    // }
    // uniqeWord = wordCounter - commonWordCounter;
    // console.log(commonWordLIst);


    const uniqeWordCounter = new Set(text.toLowerCase().match(/\b\w+\b/g)).size;
        commonWordCounter = wordCounter - uniqeWordCounter;
    const averageReadingTime = Math.ceil(word.length / 200);











  return (
    <>
    <div className='container-fluid style={props.darkMode}'>
    <div className="container" >
        <h1 className='my-3'>{props.head}</h1>
        <button onClick={props.mode} className={`btn btn-outline-${props.bootstrapDarkMode === 'dark' ? 'light' : 'dark'} rounded-0`}>Switch to {props.darkModeButton} mode</button>
        <div className='btn-group ms-5' role="group">

        <button className='btn btn-light p-3 ms-1' onClick={()=>{props.changeColor('light')}}></button>
        <button className='btn btn-secondary p-3' onClick={()=>{props.changeColor('secondary')}}></button>
        <button className='btn btn-danger p-3' onClick={()=>{props.changeColor('danger')}}></button>
        <button className='btn btn-success p-3' onClick={()=>{props.changeColor('success')}}></button>
        <button className='btn btn-warning p-3' onClick={()=>{props.changeColor('warning')}}></button>
        <button className='btn btn-info p-3' onClick={()=>{props.changeColor('info')}}></button>
        <button className='btn btn-primary p-3' onClick={()=>{props.changeColor('primary')}}></button>
        </div>
        <div className=" my-3 p-0">
            <textarea className={`form-control ${props.bootstrapDarkMode === 'dark' ? 'text-white':'text-dark'} bg-${props.bootstrapDarkMode}`}  value={text} onChange={textOnChange}  id="floatingTextarea" rows="6"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-warning m-1' onClick={lowerCase}>convertToLowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary m-1' onClick={reverseCase}>reverseTheText</button>
        <button disabled={text.length === 0} className='btn btn-secondary m-1' onClick={upperCase}>convertToUppercase</button>
        <button disabled={text.length === 0} className='btn btn-success m-1' onClick={removeExtraSpace}>removeExtraSpace</button>
        <button disabled={text.length === 0} className='btn btn-info m-1' onClick={copy}>copy</button>
        <button disabled={text.length === 0} className='btn btn-danger m-1' onClick={clearText}>clear</button>
    </div>
    <div className='container'>
        <h1>Display Properties</h1>
        <table className={`table table-${props.bootstrapDarkMode==='light'?'secondary':props.bootstrapDarkMode}`}>
            <tbody>
                <tr>
                <td>Charecter</td>
                <td>{charecter}</td>
                </tr>
                <tr>
                <td>word</td>
                <td>{wordCounter}</td>
                </tr>
                <tr>
                <td>space</td>
                <td>{space}</td>
                </tr>
                <tr>
                <td>charecter_with_out_space</td>
                <td>{charecterWithOutSpace}</td>
                </tr>
                <tr>
                <td>uniqe_word</td>
                <td>{uniqeWordCounter}</td>
                </tr>
                <tr>
                <td>commonWordCounter</td>
                <td>{commonWordCounter}</td>
                </tr>
                <tr>
                <td>averageReadingTime</td>
                <td>{averageReadingTime} m</td>
                </tr>
            </tbody>
            </table>
        <h4>preview</h4>
        <p className='pb-3'>{text}</p>
     </div>
     </div>
    </>
  )
}
