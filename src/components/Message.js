import React from 'react'
// import { Outlet, Link } from "react-router-dom";
export default function Message(props) {
  return (
    <>
    <div style={{height:'15px'}}>
{    props.message &&
    <div className={`alert alert-${props.message.type} alert-dismissible fade show rounded-0 p-0`} role="alert">
      <div className="container d-flex justify-content-center p-1">
      <strong>{props.message.type} ! </strong> &nbsp; -  {props.message.msg}
      </div>
    </div>}
    </div>
    </>
  )
}
