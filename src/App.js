import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <div className="container">
      <h2>FAQs about login</h2>
      <div className="questions">
        {data.map((question) => (
          <SingleQuestion question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
