import React from 'react';
import "./SkillCardStyle.css";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava, FaPython } from "react-icons/fa"; // Import FaJava and FaPython
import { DiGit, DiCode } from "react-icons/di"; // Import DiCode for C
import { SiVisualstudiocode, SiBootstrap, SiFigma, SiReactrouter } from "react-icons/si";
import { FaCode } from 'react-icons/fa';
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
          <abbr title='C'><FaCode className='techLogo' /></abbr> {/* Use FaCode for C */}
          <abbr title='Python'><FaPython className='techLogo' /></abbr>
          <abbr title='HTML'><FaHtml5 className='techLogo' /></abbr>
          <abbr title='CSS'><FaCss3 className='techLogo' /></abbr>
          <abbr title='Java'><FaJava className='techLogo' /></abbr>
          <abbr title='JavaScript'><FaJs className='techLogo' /></abbr>
        </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title='ReactJS'><FaReact className='techLogo' /></abbr>
            
            <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
            <abbr title='NPM'><IoLogoNpm className='techLogo' /></abbr>
            <abbr title='Bootstrap'><SiBootstrap className='techLogo' /></abbr>
            <abbr title='React Router'><SiReactrouter className='techLogo' /></abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' /></abbr>
            <abbr title='Windows'><IoLogoWindows className='techLogo' /></abbr>
            <abbr title='Figma'><SiFigma className='techLogo' /></abbr>
          </div>
        </div>
      </div>
    </>
  );
}
