import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: " Emily J.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge university",
    comment:
      "DevLabs has been a lifesaver for me! As a full-time professional with limited time, I appreciate the flexibility to learn at my own pace. The courses are well-structured, and the instructors are knowledgeable. Highly recommend it!",
  },
  {
    name: "Samir K",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full stack developer | Quarter ltd.",
    comment:
      "I've tried several online learning platforms, but DevLabs stands out for its practical approach to learning. The hands-on projects helped me gain real-world experience, and the community support was invaluable. Definitely worth the investment.",
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "computer systems engineering student | Zimbabwe",
    comment:
      "I've been a DevLabs student for over a year now, and I can't imagine my learning journey without it. The platform offers a wide range of courses, and the quality of content is exceptional. I've learned skills that have directly contributed to my career growth.",
  },
  {
    name: "Alex B",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:
      "DevLabs exceeded my expectations in every way. The courses are comprehensive, the instructors are engaging, and the platform is user-friendly. I appreciated the opportunity to connect with peers and mentors, making learning a collaborative experience.",
  },
  {
    name: "Maya G.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full stack web developer | Algeria",
    comment:
      "I'm relatively new to the tech industry, but DevLabs made the learning process smooth and enjoyable. The beginner-friendly courses helped me build a solid foundation, and I felt supported every step of the way. I'm excited to continue my learning journey with DevLabs.",
  },
  {
    name: " James L.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full stack web developer | Canada",
    comment:
      "As a seasoned developer, I'm always looking to stay updated with the latest technologies. DevLabs offers advanced courses that challenge me and keep me engaged. The instructors are experts in their field, and the platform provides ample opportunities for skill enhancement.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            At DevLabs, our students&amps; success is our driving force. Hear
            directly from them about their transformative experiences with our
            platform. From Priya Singh&amps;s career advancement to Rahul Patel&amps;s
            seamless learning journey, our students testify to the effectiveness
            of our courses and the supportive community we&amps;ve cultivated. Join
            us at DevLabs and unlock your potential today.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
