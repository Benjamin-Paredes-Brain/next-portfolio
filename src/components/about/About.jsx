import Image from "next/image"

const About = () => {

    return (
        <section id='about' className='section-separation'>
            <h2 className='text-stroke title'>ABOUT</h2>
            <div className='mb-8 lg:grid items-center justify-items-center' style={{ gridTemplateColumns: "3fr 1fr" }}>
                <div className='text-md text-customColor4 flex flex-col gap-4 lg:text-2xl'>
                    <p>Hi, I&apos;m Benjamin Martin Paredes Brain, a programming enthusiast who embarked on this exciting journey in the year 2022. Since then, I have a deep admiration for this coding and programming art, also I consider myself as a person committed to constant learning.</p>
                    <p>My current focus revolves around craft high-quality web applications and continuously improving my professional skills. My goal is to push my own every day, offering increasingly innovative and efficient results to technological challenges we confront.</p>
                    <p>In the other hand, I enjoy nurturing my mind through books, exploring new worlds by reading and acquiring knowledge. In addition, I&apos;m passionate about well-being and health. You&apos;ll regularly find me at the gym, working on my mind and body.</p>
                </div>
                <Image width={256} height={256} loading="lazy" className='shadow-img object-cover mx-auto lg:h-80' src="/img/web/avatar.webp" alt="Avatar-Benjamin_Paredes" />
            </div>
        </section>
    )
}

export default About
