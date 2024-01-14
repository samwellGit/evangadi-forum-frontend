import React from 'react'
import "./QuestionsDetail.css"

function QuestionDetail() {
  return (
    <div className="top container">
      <div>
        <h4>Question</h4>
      </div>
      <div>
        <h5>Question?</h5>
      </div>
      <div>
        <p>How it works</p>
      </div>
      <div className="border-top border-bottom h65 ">
        <h4 className="question_answer">Answer From The community</h4>
      </div>
      <div className="row info_question">
        <div className="col-md-1 my-auto ">
          <i className="fas fa-user-circle fa-3x  user   " />
        </div>
        <div className="col-md-3  my-auto">
          <p className=" ">Answer.</p>
        </div>
      </div>
      <div className="answer text-center mb-5">
        <h2 className='pt-5'>Answer The Top Question.</h2>
        <p>Go to Question page</p>

        <textarea className=" w-75  " rows="6">
          Your answer...
        </textarea>
        <div>
          <button className="btn btn-success mb-5 mt-3">Post Your Answer</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail