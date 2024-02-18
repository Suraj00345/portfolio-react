import React from "react";

const data = {
    languages: ["java","javaScripts","HTML","CSS"],
    Databases :["MySql","MongoDB","SqlServer"],
    Achivements:["completing 200Days of coding challange","1000+ DSA Question Solve","Internship"],
    frameworks:["angular","Bootstarp","React"]
}


const education = [
    {
        course: "B.A.",
        institute: "MRC",
        duration:"2021-2024",
        grade:"null",
        branch: "English Honours"
    },
    {
        course: "Intermediate",
        institute: "MHS",
        duration:"2018-2020",
        grade:"79.6%",
        branch: "PCMB"
    },
    {
        course: "School",
        institute: "MRHS",
        duration:"2012-2018",
        grade:"70%",
        
    }
]

const SubSection = ({title, points}) =>{
    return (
        <div className="subsection">
           <p className="title">{title}</p>
           <ul>
             {
                points.map(point=><li>{point}</li>)
             }
           </ul>
        </div>
    )
}

const EducationCard = ({details}) =>{
    return <div className="education-card">
        <h4>{details.institute}</h4>
        <p>{details.duration}</p>
        <p>{details.grade}</p>
        <p>{details.course}</p>
        {details.branch && <p>{details.branch}</p>}
    </div>
}



export const Leftbar = () => {
    return (
        <div className="leftbar-container">
            <div className="education">
               <h2>Education</h2>
               {
                education.map((item) => <EducationCard details = {item}/>)
               }
            </div>
       <SubSection title="Languages" points={data.languages}/>
       <SubSection title="Databases" points={data.Databases}/>
       <SubSection title="Achivements" points={data.Achivements}/>
       <SubSection title="Frameworks" points={data.frameworks}/>
        </div>
    )
}