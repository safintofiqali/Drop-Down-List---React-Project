import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="question">
      <div>
        <h2>{question.title}</h2>
        <button className="button" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p>{question.info}</p>}
    </div>
  );
};

export default Question;
