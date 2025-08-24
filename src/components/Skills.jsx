import React from "react";
import logo1 from '../assets/images/lang_logo.png'
import logo2 from '../logo.svg'
import logo3 from '../assets/images/python_logo.png'
import logo4 from '../assets/images/tailwind_logo.png'

  const skills = [
  { name: 'HTML, CSS, JS', icon: logo1 },   // no quotes here
  { name: 'React', icon: logo2 },
  { name: 'Python', icon: logo3 },
  { name: 'Tailwind', icon: logo4 },  // you can remove this empty one or fill it
];


  const Skills = () => (

    // <section id="skills" className="py-20">

    //   <div className="grid">

    //     {skills.map((skill, index) => (

    //       <div key={index} className="skill-item hover:scale-105">

    //         <img src={skill.icon} className="skill-icon"/>

    //         <h3>{skill.name}</h3>

    //       </div>


    //     ))}

    //   </div>

    // </section>
      <section id="skills" className="py-20">

  <div className="skills-icons">
    {skills.map((skill, index) => (
      <img 
        key={`icon-${index}`} 
        src={skill.icon} 
        alt={skill.name} 
        className="skill-icon" 
      />
    ))}
  </div>

  <div className="skills-names">
    {skills.map((skill, index) => (
      <h3 key={`name-${index}`} className="skill-name">
        {skill.name}
      </h3>
    ))}
  </div>

</section>

  );

  export default Skills;