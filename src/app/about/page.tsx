import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-2 justify-between">
      <div className="flex justify-between flex-col items-start">
        <h3>About Agency</h3>
        <h2>
          We create digital ideas that are bigger, bolder, braver and better
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          delectus neque minus sed dolores corrupti cupiditate libero
          voluptatibus sit. Natus fuga voluptas beatae nobis incidunt ab. At
          saepe recusandae itaque!
        </p>
        <div className="flex gap-3 justify-between w-full">
          <div className="flex flex-col">
            <label>10 K+</label>
            <span>Year of experience</span>
          </div>
          <div className="flex flex-col">
            <label>234 K+</label>
            <span>People reached</span>
          </div>
          <div className="flex flex-col">
            <label>5 K+</label>
            <span>Services and plugins</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          src="/about.png"
          alt="hero"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default AboutPage;
