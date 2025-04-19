import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiAdobe, SiFirebase, SiSass, SiBootstrap, SiExpress, SiSequelize, SiExpo, SiGodotengine, SiBlender, SiThreedotjs, SiFlutter } from 'react-icons/si';

const Profile = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 18 ? 'Hi There!' : 'Good Evening';

  return (
    <div className='projects-container'>
      <div className='profile'>
        <h1>{greeting}</h1>
        {/* Profile image as background for precise crop/zoom */}
        <div className='profile-img-wrapper'></div>
  
        <h2><u>David Wogelius</u></h2>
        <p>I am a graphics designer and software engineer with a passion for learning and solving problems. 
          I have experience in a variety of technologies and languages, 
          and I am always looking to expand my knowledge and skills.
        </p>
      </div>
        <h2 className='tech-stack-title'><u>Tech Stack</u></h2>
      <div className='tech-stack'>
        <div className='columns'>

          <div className='tech-stack__column'>
            <h3>Languages</h3>
            <menu>
              <p><FaJs /> JavaScript</p>
              <p><FaHtml5 /> HTML</p>
              <p><FaCss3Alt /> CSS</p>
              <p><FaDatabase /> SQL</p>
              <p><FaDatabase /> NoSQL</p>
            </menu>
          </div>

          <div className='tech-stack__column'>
            <h3>Frameworks</h3>
            <menu>
              <p><FaNodeJs /> Node.js</p>
              <p><FaReact /> React</p>
              <p><FaReact /> React-Native</p>
              <p><SiFlutter /> Flutter</p>
              <p><FaVuejs /> Vue</p>
              <p><SiExpress /> Express</p>
              <p><SiSequelize /> sequelize.js</p>
              <p><SiExpo /> Expo</p>
            </menu>
          </div>

          <div className='tech-stack__column'>
            <h3>Libraries</h3>
            <menu>
              <p><SiFirebase /> Firebase</p>
              <p><SiSass /> Sass</p>
              <p><SiBootstrap /> Bootstrap</p>
              <p><FaGitAlt /> Git + GitHub</p>
              <p><SiThreedotjs /> Three.js</p>
            </menu>
          </div>

          <div className='tech-stack__column'>
            <h3>Other</h3>
            <menu>
              <p><SiGodotengine /> Godot/GDscript</p>
              <p><FaPython /> Python</p>
              <p><SiBlender /> Blender3D</p>
              <p><SiAdobe /> Adobe Creative Cloud</p>
            </menu>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Profile;
