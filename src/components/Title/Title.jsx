import React from 'react';
import "./title.scss";

function Title(props) {
  const { text } = props;
  const letters = [...text].map((letter, index) => (
    <div className="wrapper" key={index}>
      <div className="letter">{letter}</div>
      <div className="shadow">{letter}</div>
    </div>
  ));
  return (
    <div id="text">
        {letters}
    </div>
    )
}

export default Title;