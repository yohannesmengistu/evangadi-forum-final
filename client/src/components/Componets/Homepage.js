import React from 'react'
import "./Homepage.css"
import Question from './Question';
function Homepage() {
  return (
    <div className="container">
      <div className="homp ">
        <div className=" hed ">
          <div className='row askque'>
          <div className="col-md-6   ">
            <button className="qb   ">Ask Question</button>
          </div>
          <div className="col-md-6 ">
            <h4 className="wel  text-md-end">Welcome Group Two</h4>
          </div>
          </div>
        </div>
        <h3 className="ns ">Questions</h3>
      </div>
      <Question />
      <Question />
      <Question />

      
    </div>
  );
}

export default Homepage
