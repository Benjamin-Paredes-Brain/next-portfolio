"use client"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={`${scrolled ? "bg-customColor2 bg-opacity-10 backdrop-blur-md" : "bg-transparent"} sticky inset-0 z-50`}>

            <nav className='flex items-center justify-center section-separation py-4'>
                <ul className="flex text-customColor4 text-lg gap-4 lg:text-2xl lg:gap-8">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar