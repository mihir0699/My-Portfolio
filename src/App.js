import logo from './logo.svg';
import {useEffect} from 'react'
import './App.css';
import Img from './images/mihir0699.jpg'
import {motion, AnimatePresence} from 'framer-motion';
import './mobile.css'
import { Card } from 'antd';
import { useInView } from 'react-intersection-observer';



function App() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

useEffect(()=>{
console.log(inView)
}, [inView])
 
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
        duration:1
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
 


       <motion.div variants={icons} initial="hidden" animate={inView ? "animate": "hidden" } ref={ref}>
        <h2>
          Skills
        </h2>
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
  );
}

export default App;
