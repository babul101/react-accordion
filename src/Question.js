import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [seeInfo, setSeeInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setSeeInfo(!seeInfo)}>
          {seeInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {seeInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
