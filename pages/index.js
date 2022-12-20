import React, {useEffect , useState} from 'react';
import style from '../styles/Home.module.css'
import { faGithub , faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Projects from '../data/contentArray';
import Desc from './desc';

export default function Home() {

  const [ProjectsData, setProjectsData] = useState([]);
  const [Index, setIndex] = useState(-1)

  useEffect(() => {
    console.log(Projects)
    setProjectsData(Projects)
  }, [])

  
  const handleClick = (event , key)=>{
    setIndex(key);
  }

  useEffect(() => {
    
    console.log(ProjectsData[Index])
    if(Index!==-1){
      document.documentElement.style.setProperty('--grad-1',ProjectsData[Index].color1);
      document.documentElement.style.setProperty('--grad-2',ProjectsData[Index].color2);
    }else{
      document.documentElement.style.setProperty('--grad-1',"rgb(82,99,200)");
      document.documentElement.style.setProperty('--grad-2',"rgb(193,133,104)");
    }

  }, [Index])
  
  


  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <header>
            <div className={style.headerDiv}>
              <div className={style.name}>
                <a onClick={()=>setIndex(-1)}>M</a>
              </div>
              <div className={style.logos}>
                <a href="mailto:mgarg6858@gmail.com"><svg version="1.0"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 643 465">
                <path d="M39 3.4C31.6 5.1 27.5 7 21.4 11.6 11.2 19.3 5 29.2 3 41.1c-.8 4.5-1 61.4-.8 195.9.3 185.8.3 189.6 2.3 195 4.5 12.6 15.8 24.2 28.2 29.1 5 1.9 8.2 2.3 23.1 2.7l17.2.4V292.6c0-94.4.3-171.6.6-171.6.4 0 56.5 39.8 124.6 88.5l124 88.6 123.6-88.3c67.9-48.6 123.9-88.5 124.4-88.6.4-.2.8 76.8.8 171.2V464h15.3c16.2 0 21.9-1 30.3-5.1 11.3-5.6 21.7-19.2 24.3-31.7.8-3.8 1.1-59.8 1.1-194.5 0-166.8-.2-190-1.5-195.2-4.7-17.7-19.3-31.2-37.6-34.6-5.4-1-7-.9-9.2.2-1.4.8-62.9 44.7-136.6 97.6-73.7 53-134.5 96.3-135 96.3-.6 0-60.8-42.8-133.8-95.2C115.2 49.4 54 5.6 52.1 4.3c-3.8-2.6-5.2-2.7-13.1-.9z"></path></svg>
                </a>
                  <a href='https://github.com/mohitgarg05' className={style.github} target='_blank'><FontAwesomeIcon   icon={faGithub} /></a>
                  <a href='https://medium.com/@mgarg6858' className={style.medium} target='_blank'><FontAwesomeIcon   icon={faMedium} /></a>
              </div>
            </div>
          </header>

          <section>
            <div className={style.sec}>
            <div className={style.waviy}>

                {Index!==-1?
                  
                    <Desc  data = {ProjectsData[Index]} />
                  :
                  <>
                  <span style={{"--i":1}}>W</span>
                  <span style={{"--i":2}}>E</span>
                  <span style={{"--i":3}}>L</span>
                  <span style={{"--i":4}}>C</span>
                  <span style={{"--i":5}}>O</span>
                  <span style={{"--i":6}}>M</span>
                  <span style={{"--i":7}}>E</span>
                  <div className={style.aboutMePara}>
                    <p>My name is Mohit Garg, I'm a full stack web developer. I developed many types of frontend pages and full stack web apps by using MERN tech.</p>
                      <p>I am also web3 enthusiast. Leveling up my web developer skills by doing blockchain or web3 like technologies.
                      From past 1 year , I started making content on technologies I know on twitter and writing 
                       blogs on medium platform to help others. You can check them by clicking button on top right.
                    </p>
                  </div>
                  </> 
                }

                 
              </div>

             

              <div className={style.projects}>
                <h2>Projects</h2>
                <div className={style.projectAr}>
                  {ProjectsData?.map((item,i)=>{
                      return(
                      <>
                        <div className={style.inside} key={i} onClick={event => handleClick(event, i)}>
                          <a>{item.projectName}</a>
                        </div>
                        
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className={style.foot}>
              <p>@2022 mgarg6858@gmail.com</p>
            </div>
          </footer>

        </div>
      </div>
    </>
  )
}
