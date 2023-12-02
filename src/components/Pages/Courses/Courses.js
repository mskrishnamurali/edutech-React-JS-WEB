import React from 'react';
import './Courses.css';

import ai from '../../../assets/img/ai.png';
import sd from '../../../assets/img/sd.png';
import dg from '../../../assets/img/dg.png';
import hacking from '../../../assets/img/hacking.png';

function Courses() {
  const courseData = [
    {
      title: 'AI development',
      desc: 'Master AI Development',
      img: ai,
    },
    {
      title: 'Digital Marketing',
      desc: 'Master Digital Marketing',
      img: dg,
    },
    {
      title: 'Software Development',
      desc: 'Master Software Development',
      img: sd,
    },
    {
      title: 'Cyber Security',
      desc: 'Master Cyber Security',
      img: hacking,
    },
  ];

  return (
    <div className='container course-container'>
      <div className='course-top'>
        <h2 className='section_title'>Our free Courses</h2>
        <p>The Top Trending Courses with Free Certificates</p>
        <div className='course-wrapper'>
          {courseData.map((course, index) => (
            <div className='course-item' key={index}>
              <span className='course-icon'>
                <img src={course.img} alt={course.title} />
              </span>
              <div className='course-content'>
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
