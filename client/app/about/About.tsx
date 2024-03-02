import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
<div className="text-black dark:text-white">
  <br />
  <h1 className={`${styles.title} 800px:!text-[45px]`}>
    Welcome to DevLabs :
    <span className="text-gradient">
      Your Gateway to Technological Mastery
    </span>
  </h1>

  <br />
  <div className="w-[95%] 800px:w-[85%] m-auto">
    <br />
    <p className="text-[18px] font-Poppins">
      Are you ready to embark on a journey of learning and innovation? Look
      no further than DevLabs, where knowledge meets opportunity and passion
      meets proficiency.
      <br>
      </br>
      <br>
      </br>
      Hello, I&apos;m Devansh Saxena, the founder of DevLabs,
      and I am thrilled to welcome you to our platform. At DevLabs, our
      mission is simple: to empower individuals with the skills and
      expertise needed to thrive in today&apos;s rapidly evolving technological
      landscape.
      <br />
      <br />
      DevLabs isn&apos;t just another online learning platform. We are a
      community-driven hub for aspiring technologists, developers, and
      enthusiasts alike. Here&apos;s why you should choose DevLabs:
      <br />
      <br />
      <ol style={{ listStyleType: 'disc' }}>
        <li>Diverse Course Catalog: Our platform hosts a vast array of courses covering a spectrum of technologies. Whether you&apos;re interested in web development, data science, artificial intelligence, cybersecurity, or any other tech domain, we&apos;ve got you covered.</li>
        <li>Expert Instructors: Learn from the best in the industry. Our courses are crafted and taught by seasoned professionals and subject matter experts who bring real-world experience and insights to the virtual classroom.</li>
        <li>Hands-On Learning: We believe in learning by doing. That&apos;s why our courses are designed to be interactive and hands-on, allowing you to apply theoretical concepts to practical, real-world scenarios.</li>
        <li>Flexibility: Life can be busy, but that shouldn&apos;t stand in the way of your learning journey. With DevLabs, you have the flexibility to learn at your own pace, on your own schedule. Access course materials anytime, anywhere, and on any device.</li>
        <li>Community Support: Learning is more fun and effective when done together. Join our vibrant community of learners, collaborate with peers, share insights, and seek guidance from mentors and fellow enthusiasts.</li>
      </ol>
      <br />
      Getting started with DevLabs is easy. Simply create an account on our platform, and you&apos;ll gain instant access to our library of courses. Whether you&apos;re a beginner taking your first steps into the world of technology or a seasoned professional looking to upskill, there&apos;s something for everyone at DevLabs.
      <br />
      So what are you waiting for? Join us at DevLabs and unlock your potential today. Together, let&apos;s explore, innovate, and transform the future of technology. Happy learning!
    </p>
    <br />
    <span className="text-[22px]">Devansh Saxena</span>
    <h5 className="text-[18px] font-Poppins">
      Founder of DevLabs
    </h5>
    <br />
    <br />
    <br />
  </div>
</div>

  );
};

export default About;
