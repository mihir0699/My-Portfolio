import {useEffect, useState, useRef} from 'react'
import Img from './images/mihir0699.jpg'
import Chattel from './images/Chattel.jpg'
import {motion, AnimatePresence} from 'framer-motion';
import { Card , Input, Button} from 'antd';
import { MailTwoTone, HomeTwoTone} from '@ant-design/icons';
import { useInView, InView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter as Router} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import {formSubmit} from './firebase/formSubmit'
import './App.css';
import './mobile.css'


function App() {

  const projects_ref= useRef(null);
  const about_ref = useRef(null);
const [form, setForm]= useState({});
const form_ref= useRef();
const skills_ref = useRef(null);
const education_ref = useRef(null);
const contact_ref = useRef(null);
const experience_ref = useRef(null);

const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);
useEffect(()=>{

  window.addEventListener('click', (e)=>{
      if (!e.target.classList.contains('ham')) {
          if(sidebar===true)
          setSidebar(false);
      }

  })
}, [sidebar])
const handleSubmit = async(e)=>{
  e.preventDefault();
  let x =  form;
  x.id = shortid.generate();
  await formSubmit(x);
  toast.success("Thanks for contacting me! I will get back to you asap");
  form_ref.current.reset();
}
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
    <Router>
    <div className="App">
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <img src="https://img.icons8.com/metro/26/000000/menu.png" onClick={showSidebar} className="ham"/>
           
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:'1000'}}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
        
                <li className="nav-text">
                  <Link onClick={showSidebar} onClick={()=>{about_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>About Me</span>
                  </Link>
                </li>
                <li className="nav-text">
                <Link  onClick={showSidebar} onClick={()=>{skills_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>Skills</span>
                  </Link>
                </li>
                <li className="nav-text">
                <Link  onClick={showSidebar} onClick={()=>{experience_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>Work Experience</span>
                  </Link>
                </li>
                <li className="nav-text">
                <Link  onClick={showSidebar} onClick={()=>{projects_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>Projects</span>
                  </Link>
                </li>
                <li className="nav-text">
                <Link  onClick={showSidebar} onClick={()=>{education_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>Education</span>
                  </Link>
                </li>
                <li className="nav-text">
                <Link  onClick={showSidebar} onClick={()=>{contact_ref.current.scrollIntoView({behavior:'smooth'})}}>
                        <span>Contact Me</span>
                  </Link>
                </li>
                
   
    
          </ul>
        </nav>
      </IconContext.Provider>

  
       <ToastContainer />
       <div ref={about_ref}>
       <h1 className="headings">
          About me
        </h1>
      <motion.div className="intro" variants={intro} initial="hidden" animate="animate">
    
        <div className="image"><img src={Img} className="my_image"/></div>
        <div className="intro_info">
        <span className="intro_head">Hi, myself Mihir</span><br/>
        <br/> I am a passionate and self taught MERN Stack developer and a competitive programmer. I am currently a third year computer science student pursuing Bachelor of Technology at JSS Academy of Technical Education, Noida. 
         In my free time you will find me playing Among us 🤪 or scrolling <a href="https://twitter.com/mihir0699" target="_blank" className="twitter"> Twitter </a> 🤳. 
        </div>

        <div>
        <a href="https://github.com/mihir0699" target="_blank">  <img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
      <a href="https://www.instagram.com/mihir_gupta_1" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
      <a href="https://www.linkedin.com/in/mihir0699/" target="_blank"> <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
        </div>
       
      </motion.div>
      </div>
 

      <InView>
    {({ inView, ref, entry }) => (
      <div ref={skills_ref}>
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
      </div>
       )}
       </InView>
      <InView>
    {({ inView, ref, entry }) => (
      <div ref={experience_ref}>
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
    </div>
    )}
  </InView>
  <InView>
    {({ inView, ref, entry }) => (
      <div ref={projects_ref}>
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
</div>
      )}
      </InView>
      <InView>
    {({ inView, ref, entry }) => (
      <div ref={education_ref}>
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
</div>
  
     )}
      </InView>
      <InView>
    {({ inView, ref, entry }) => (
      <div ref={contact_ref}>
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
    <form className="form" onSubmit={handleSubmit} ref={form_ref}>
<input type="text" className="input_field" placeholder="Name" required onChange={(e)=>{setForm({...form, name: e.target.value})}}></input>
<input type="email" className="input_field" placeholder="Email" required onChange={(e)=>{setForm({...form, email: e.target.value})}}></input>
<textarea className="message" type="text" placeholder="Message" required onChange={(e)=>{setForm({...form, message: e.target.value})}}></textarea>
<br/>
<button type="submit" className="button_submit">SEND MESSAGE</button>
</form>
  </div>
</div>
</motion.div>
</div>

)}
</InView>

    </div>
    </Router>
 
  );
}

export default App;
