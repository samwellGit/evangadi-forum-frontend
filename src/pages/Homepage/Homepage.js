import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axiosBase from "../../components/axios";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../App";
import QuestionDetail from "../Questions/QuestionDetail";

function Homepage() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AppState);
  const [question, setQuestions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const axios = axiosBase();
  const handleclick = () => {
    navigate("/askquestion");
  };
  useEffect(() => {
    allQuestions();
  }, []);
  //all questions load here
  const allQuestions = async () => {
    try {
      const data = await axios.get("/questions/all-questions", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setQuestions(data?.data?.allQuestion);
    } catch (error) {
      console.log(error.response);
    }
  };

  // allQuestions()
  useEffect(() => {
    setFilter(
      question.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, question]);
  return (
    <div className="container">
      <div className="homp ">
        <div className=" hed ">
          <div className="row askque">
            <div className="col-md-6   ">
              <button className="qb   " onClick={handleclick}>
                Ask Question
              </button>
            </div>
            <div className="col-md-6 ">
              <h4 className="wel  text-md-end">Welcome Back</h4>
            </div>
          </div>
        </div>
        <h3 className="ns">Questions</h3>
      </div>
      <div>
        <div>
          {Filter.map((quest, i) => (
            <QuestionDetail question={quest} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
