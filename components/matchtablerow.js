import style from './matchtablerow.module.scss'
import classNames from 'classnames';
import React, { useState } from 'react';


export default function Matchtablerow(props){
    if (props.column === "match"){
        if (!props.convey || !props.receive) {
            return (
                <div>Pending</div>
            )
        }else if (props.convey == props.receive) {
            return (
                <div>Match</div>
            )
        }else{
            console.log(props.convey)
            return (
                <div><a onClick={()=>props.editCase()} >Submit</a></div>
            )
        }
        
    }else if (!props[props.column] ){
        return <div>Pending</div>
    }else if ((props.convey === props.receive) || props.column !== props.party || !props.convey|| !props.receive ){
        return (
            <div>{props[props.column]}</div>
        )
    }else{
        return (
            <select className={style.dropdown} value = {props.form} onChange={(e)=>props.setValue(e.target.value)}  >
                <option value={props.convey}> {props.convey} </option>
                <option value={props.receive}> {props.receive} </option>
            </select>
        )
    }
}
