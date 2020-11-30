import {useEffect} from 'react'
import './App.css';
import Img from './images/mihir0699.jpg'
import Chattel from './images/Chattel.jpg'
import {motion, AnimatePresence} from 'framer-motion';
import './mobile.css'
import { Card , Input, Button} from 'antd';
import { MailTwoTone, HomeTwoTone} from '@ant-design/icons';
import { useInView, InView } from 'react-intersection-observer';



function App() {


  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
 
  const intro ={
    hidden : {
     x:-400,
     opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
       opacity:{
         duration:0.5
       },
        x:{
          duration:1,
          type: "spring",
          stiffness : 80,
          bounce:0.25
          
        }
      }
    }
  }

  const icons = {
    hidden : {
      opacity:0,
      x:-100
    },
    animate:{
      opacity:1,
      x:0,
      transition: {
        type:"spring",
        duration:1.5
      }
    }
    
  }
  return (
    <div className="App">
      <motion.div className="intro" variants={intro} initial="hidden" animate="animate">
        <div className="image"><img src={Img} className="my_image"/></div>
        <div className="intro_info">
        Hello, I am Mihir, I am a passionate and self taught MERN Stack developer and a Competetive programmer.
      <br/>
     <br/>
         In my free time you will find me playing Among us 🤪 or scrolling <a href="https://twitter.com/mihir0699" target="_blank" className="twitter"> Twitter </a> 🤳
        </div>
       
      </motion.div>
 

      <InView>
    {({ inView, ref, entry }) => (
       <motion.div variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
        <h1 className="headings">
          Skills
        </h1>
        <div className="skills_icons">
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/javascript.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/nodejs.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/mongodb.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/officel/96/000000/react.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/python.png"/>
       </div>
       <div className="skills_icon">
       <img src="https://img.icons8.com/color/96/000000/firebase.png"/>
       </div>
       </div>
      </motion.div>
       )}
       </InView>
      <InView>
    {({ inView, ref, entry }) => (
      <motion.div variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
      <h1 className="headings">Work Experience</h1>
      <div className="work_exp">
        <div className="image_work_ex">
        <img src={Chattel}/>
        </div>
        <div className="work_exp_div">
        <h2>Chattel Technologies <span className="duration">&nbsp;Sept 2020 - Oct 2020</span></h2>
    
        <h3>Full Stack Developer</h3> 
        <ul className="work_exp_list">
          <li>Designed and implemented a unique and user-friendly eCommerce website for the company.</li>
          <li>Developed efficient REST API's.</li>
          <li>Deployed the project on various platforms.</li>
        </ul>
        </div>
      </div>
    </motion.div>
    )}
  </InView>
  <InView>
    {({ inView, ref, entry }) => (
      <>
      <motion.h1 className="headings" variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>Projects</motion.h1>
      <motion.div  className="project_div" variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
  
  <div>
  <iframe src="https://drive.google.com/file/d/1sT9i97057c3DhiQMBmvGTPVhsNxVtpW6/preview" width="500" height="380" className="project_video"></iframe>
  <h2 style={{fontFamily:'Montserrat'}}><a href="https://github.com/mihir0699/FoodEazy" target="_blank" className="links">Food Eazy</a></h2>
  <h4>Developed an online platform for food ordering to ease the process of placing order for customers and
receive orders for restaurant owners. It was built using MERN Stack and PayTM API.</h4>
  </div>
  <div>
  <iframe src="https://drive.google.com/file/d/1pVAEUQSeJukN2kWKZCmXtPa7W3IDGpew/preview" width="500" height="380"  className="project_video"></iframe>
  <h2 style={{fontFamily:'Montserrat'}}><a href="https://github.com/mihir0699/Insta-Poll" target="_blank" className="links">Insta Poll</a></h2>
  <h4>Developed a Real-Time Polling website using React.js and Firebase that eases the process of creating polls
and sharing them across multiple social platforms.
</h4>
  </div>
</motion.div>
</>
      )}
      </InView>
      <InView>
    {({ inView, ref, entry }) => (
<motion.div variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
<h1 className="headings" >Education</h1>
<div className="education">
  <div>
<h3>Bachelor of Technology</h3>
<h3>JSS Academy of Technical Education</h3>
<span>August 2018- Present</span>
</div>
<div>
<h3>Senior Secondary Education</h3>
<h3>S.S.K.L.A.Mem.Bal Viday Mandir, Jalaun, UP</h3>
<span>August 2018- Present</span>
</div>
</div>

</motion.div>
  
     )}
      </InView>
      <InView>
    {({ inView, ref, entry }) => (
<motion.div variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
<h1 className="headings">Contact Me</h1>
<div className="contact_grid">
  <div className="contact_div">
    <div>
  <MailTwoTone /> <a href = "mailto: mihir0699@gmail.com" style={{textDecoration:'none'}}>mihir0699@gmail.com</a>
  </div>

  <div>
  <HomeTwoTone /> Noida, India
  </div>
  </div>

  <div>
    <form className="form">
<input type="text" className="input_field" placeholder="Name" required></input>
<input type="email" className="input_field" placeholder="Email" required></input>
<textarea className="message" type="text" placeholder="Message" required></textarea>
<br/>
<Button type="primary" className="button_submit">SEND MESSAGE</Button>
</form>

  </div>

</div>


</motion.div>

)}
</InView>
    </div>
  );
}

export default App;
