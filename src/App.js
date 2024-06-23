
import './App.css';
import './Mediaquerry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/karthik1.png'
import img2 from './images/Screenshot (26).png'
import img3 from './images/Screenshot (27).png'
import img4 from './images/skill5.png'
import img5 from './images/Screenshot (30).png'
import img6 from './images/Screenshot (29).png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className='wholepage'>
        {/* header */}
        <div className='header'>
          <div className='namelogo'>KARTHIK M</div><div className='spinner'></div>
          <div className='header1'><p>Home</p><p>Projects</p><p>Blog</p><p>Contacts</p></div>
          <a href='https://wa.me/qr/PXO4ZYNMF2HME1' className='contactme'><div className='header2'>Contact me!</div></a>
        </div>

        {/* firstportion */}
        <div className='container1'>
          <h1 className='body1'>
            <p className='mynameanim' >hello!&nbsp;&nbsp;Im&nbsp;Karthik</p>
            <p className='gradient-text'>
              <p>Web Developer </p>
            <p>UX Designer</p>
            <p className='body2'>
              <p>I'm a Front-end developer and I develope web pages crafting seamless digital experiences with  precision and creativity and solutions to billion people.</p>
            </p>
            {/* <p className='body2-resp'>
              <p>I'm a Front-developer and I develope web pages crafting seamless digital</p>
            </p> */}
            </p>
            {/* <a href='./images/karthikResume2024.pdf' download className='cvbutton' ><p>Download CV</p></a> */}
          </h1>
          <object className='body3'></object> 
          <a href='https://github.com/karthik5677' className='contactme'><img className='myimageg' src={img1}/></a>
        </div>

      {/* secondportion */}
      <div className='container1'>
          <object className='aboutimage'></object>
          <div style={{border: '0px solid yellow',alignItems:'end',display:'flex',flexDirection:'column',width:'60%'}}>
          <p className='aboutmehaeding'>About me</p>
          <p className='aboutpara'>
            I've honed my skills in HTML, CSS, JavaScript, and various 
            frameworks like React. One of my notable projects involves building a 
            responsive e-commerce platform from scratch, showcasing my ability to develop 
            scalable and user-friendly web solutions.</p>
          <a href='https://wa.me/qr/PXO4ZYNMF2HME1' className='contactme'><div className='contactbutton2'>Contact me!</div></a>
          </div>
      </div>

        {/* thirdportion */}
      <div className='container1'>
          <div>
            <p className='aboutmehaeding1'>My Skills</p>
          <div className='gridskill'>
            <p>React Js</p><div className='skillsbox'></div>
            <p>HTML5</p><div className='skillsbox'></div>
            <p>CSS3</p><div className='skillsbox'></div>
            <div className='skillsbox'></div><p>Javascript</p>
            <div className='skillsbox'></div><p>Responsive Web design</p>
            <div className='skillsbox'></div><p>UI / UX Design</p>
          </div>
          </div>
      </div>

        {/* thirdportion */}
      <div className='container1'>
        {/* <img className='aboutarrow2' src={img2}/> */}
        <div>
          <p className='aboutmehaeding2'>My Projects</p>
          <p className='protitle1'>Replica of Adidas website</p>
          <a className='a' href='https://karthik5677.github.io/adidas-replica2024/'><p className='protitleu1'>View site</p></a>
          <p className='protitle121'>In the ever-evolving landscape of web development, 
            replicating the interface and functionality of Adidas website, renowned for its sleek design and comprehensive e-commerce capabilities,
             presents a unique opportunity to demonstrate one's prowess in ReactJS.Utilizing ReactJS, along with a suite of libraries including Redux for state management, React-Bootstrap for UI components,
             React-Icons for branding, and React-router-dom for navigation, I embarked on a journey to bring the essence of the Adidas website to life.
              The project not only required a deep understanding of ReactJS but also demanded attention to detail in replicating the site's layout, color 
              schemes, typography, and overall aesthetic appeal.</p>
          <div style={{display:'flex'}}>
          <a className='a' href='https://karthik5677.github.io/adidas-replica2024/'><img className='projectimg1' src={img6}/></a>
            <p className='protitle2'>I embarked on a journey to bring the essence of the Adidas website to life.
            The project not only required a deep understanding of ReactJS but also demanded attention to detail in replicating the site's layout, color 
            schemes, typography, and overall aesthetic appeal.</p>
          </div> 
          <div style={{display:'flex'}}>
          <a className='a' href='https://karthik5677.github.io/adidas-replica2024/'><img className='projectimg2' src={img5}/></a>
          <p className='protitle12'>I embarked on a journey to bring the essence of the Adidas website to life.
          The project not only required a deep understanding of ReactJS but also demanded attention to detail in replicating the site's layout, color 
          schemes, typography, and overall aesthetic appeal.</p> 
          </div> 
          
        </div>
        
        
        
      </div>


        {/* thirdportion */}
        
        {/* <div className='container1'>
          <p className='prodescription'>In the ever-evolving landscape of web development, 
            replicating the interface and functionality of established brands stands as a formidable challenge. Among these, the Adidas
             website, renowned for its sleek design and comprehensive e-commerce capabilities, presents a unique opportunity to demonstrate 
             one's prowess in ReactJS. My recent endeavor involved meticulously recreating the Adidas website, focusing on delivering a seaml
             ess user experience akin to the original.
            Utilizing ReactJS, along with a suite of libraries including Redux for state management, React-Bootstrap for UI components,
             React-Icons for branding, and React-router-dom for navigation, I embarked on a journey to bring the essence of the Adidas website to life.
              The project not only required a deep understanding of ReactJS but also demanded attention to detail in replicating the site's layout, color 
              schemes, typography, and overall aesthetic appeal.</p>
        </div> */}


        {/* thirdportion */}
        <div className='container1'>
          <div>
      <p className='aboutmehaedingu1'>Contact Us</p>
          <div className='contactboxlower'>
            <p><span>My Git-Hub: </span><a className='a' href='https://github.com/karthik5677'>https://github.com/karthik5677 </a></p>
            <p><span>My Linked-in: </span><a  className='a' href=' https://github.com/karthik5677'> https://github.com/karthik5677 </a></p>
            <p className='body2-a'>
              <p className='body2-a1'><p>E-mail:</p>karthiii1554@gmail.com</p>
              <p className='body2-a2'><p>Mobile: </p>+91 9600732925</p>
            </p>
          </div>
          </div>
          
          {/* <p className='aboutmehaeding11'>Follow Me</p> */}
          {/* workingarea */}
          {/* <button onClick={Downloadbutton}>Download</button> */}
        </div>
        
      </div>
    )
}

export default App