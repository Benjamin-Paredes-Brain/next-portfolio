import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-separation">
      <h2 className="text-stroke title">ABOUT</h2>
      <div
        className="mb-8 lg:grid items-center justify-items-center"
        style={{ gridTemplateColumns: "3fr 1fr" }}
      >
        <div className="text-customColor4 flex flex-col gap-4 md:text-lg lg:text-2xl">
          <p>
            Hi, I&apos;m Benjamin Martin Paredes Brain, a Full Stack Developer
            based in Córdoba, Argentina, with experience building web
            applications for real clients. I started my programming journey in
            2023 and have since focused on creating practical, scalable, and
            user-oriented digital solutions.
          </p>

          <p>
            I&apos;m currently studying a Bachelor&apos;s Degree in Artificial
            Intelligence and Robotics, while also expanding my background in
            Data Science, data analysis, visualization, and machine learning.
            This combination allows me to approach software development with a
            broader technical perspective, connecting web development, data, and
            intelligent systems.
          </p>

          <p>
            My work is focused on solving real business and operational problems
            through software, from management platforms and internal tools to
            websites optimized for usability, performance, and digital
            visibility. I value clean architecture, continuous learning, and
            building solutions that are useful beyond the code itself.
          </p>
        </div>

        <Image
          width={256}
          height={256}
          priority
          className="shadow-img object-cover mx-auto lg:h-80"
          src="/img/web/avatar.webp"
          alt="Avatar-Benjamin_Paredes"
        />
      </div>
    </section>
  );
};

export default About;
