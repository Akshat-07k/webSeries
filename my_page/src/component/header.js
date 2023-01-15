import React from "react"
import Img from "./x.jpg"
import Pdf from 'assignment_1.html';


export default function Header()
{
    function fun(){

    }
    return (
        <div className="top">
            <div className="top--left">
                <img src={Img}/>
                <span>FLIX</span>
            </div>
            <div className="top--right">
                <div className="top--right--home">Home </div>
                <a className="top--right--Creator" href={Pdf} target="_blank" >Creator </a>
                
            </div>
        </div>
    )
}