import React from "react";
import "./AboutMe.css";
import profile from "../../../images/profile.jpg";

const AboutMe = () => {
  return (
    <div className="container about-container">
      <div className="single about">
        <img src={profile} alt="" />
        <h2 className="pb-3">M. Ahesanul Hoque Toha</h2>
        <p>
          Hey there! I'm Toha. I am a student.I started learning Web development
          from <a className='hero' href="https://web.programming-hero.com/">Programming Hero </a>
          My goal is to be a Full stack developer.I have to do a lot of hard
          word to achieve this goal.Now I am struggling to be a developer. I
          will carry on my hard working until I achieve the goal
        </p>
        <h5>Struggle, To be Continue🏆</h5>
      </div>
    </div>
  );
};

export default AboutMe;
