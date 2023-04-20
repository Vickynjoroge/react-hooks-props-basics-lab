import React from "react";
import Links from "./Links";

function About(props) {
  if(props.bio){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.links.linkedin} github={props.links.github} />
    </div>

  );
}
 else{return(" ");
 };
};

export default About;
