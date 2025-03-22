import React from 'react';
import data from "../assets/data.json";

export const Timeline = () => {
  return (
    <div id="timeline">
        <div className="timelineBox">
        {data.projects.map((item , index) => (
        <TimelineItem 
        heading={item.title}
        text={item.data}
        index={index}
        key={item.title}/>
      ))}
        </div>
    </div>
  )
}



const TimelineItem = ({heading, text , index}) => {
  return(
    <div 
    className={`timelineItem ${index % 2=== 0 ?
        "leftTimeline" : "rightTimeline"
    }`}
    >
       <h2>{heading}</h2>
        <p>{text}</p>
    </div>
  )
}