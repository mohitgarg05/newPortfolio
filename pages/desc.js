import React from 'react'
import style from '../styles/Home.module.css'
import 'animate.css';
const desc = (props) => {

    console.log(props)
  return (
    <div className={style.projectDiv} >
        <h4>{props.data?.projectName}</h4>
                    <div className={style.aboutMePara}>
                      <p>{props.data?.Description}</p>
                        <p style={{display:"flex"}}>Tech Used : 
                        {props.data?.TechSkills.map((item)=>{
                          return (
                              <p className={style.removeMargin} style={{marginLeft :"20px",padding:"0px"}}>{item}</p>
                          )
                        })}</p>
                        <div className={style.components}>
                            <a href={props.data?.ViewSite} target="_blank">View Site</a>
                            <a href={props.data?.Github} target="_blank" className={style.second}>GitHub</a>
                        </div>
                    </div>
    </div>
  )
}

export default desc