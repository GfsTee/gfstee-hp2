import React, { useState, useEffect } from "react";

const Skills = () => {
  const mySkills = {
    HTML: 90,
    CSS: 85,
    JS: 90,
    React: 80,
    Next: 80
  }
  const [skillStart, setSkillStart] = useState(0)
  const loading = () => {
    console.log("Test")
    console.log(skillStart.HTML < mySkills.HTML)
    console.log(skillStart)
    console.log(mySkills.HTML)

    if (skillStart < mySkills.HTML) {
      setSkillStart(skillStart + 1)
    }
  }
  useEffect(() => {
    setTimeout(loading, 100)
  }, [skillStart])
  return <>
    <div className="bar">
      <div className="skill" style={{ width: `${skillStart}%` }}></div>
    </div>
    <style jsx> {`
    .bar {
      width: 500px;
      height: 20px;
      background: #333;
    }
    .skill {
      background: red;
      height: 100%;
    }
    `}</style>
  </>;
};

export default Skills;
