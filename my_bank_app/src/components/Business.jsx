import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="featureIcon" className="w-[50%] h-[50%] object-contain"/>
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>

  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Be the best in your business, <br className="sm:block hidden" /> we
          will handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From its medieval origins to the digital era, learn everything there
          is to know about the ubiquitous lorem ipsum passage.From its medieval
          origins to the digital era, learn everything there is to know about
          the ubiquitous lorem ipsum passage.
        </p>
        <Button styleTop="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
