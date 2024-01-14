import React from 'react'
import "./Question.css"

function Question() {
  return (
    <div className="border-top row top_question ">
      <div className="col-md-1 vertical-center-text">
        <i className="fas fa-user-circle fa-3x  user   " />
      </div>
      <div className="col-md-3 vertical-center-text">
        <p className=" ">What is git</p>
      </div>
      <div className=" col-md text-md-end   my-md-auto">
        <i className="fas fa-angle-right fa-lg    " />
      </div>
    </div>
  );
}

export default Question