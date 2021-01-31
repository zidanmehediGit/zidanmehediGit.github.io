import React, { useEffect, useState } from 'react';
import Section from './Section';
import me from './Images/Zidan Bro.jpeg';
import Typical from "react-typical";
import cv from './Images/Mehedi_Hassan_Zidan.pdf'
import new_cv from './Images/Mehedi__Hassan__Zidan.pdf'


function AboutContent() {
    const [image_class, set_image_class] = useState("column left");
    const [text_class, set_text_class] = useState("column right");
    const [evenT, setEvent] = useState();
    //const image_class = "column left";
    //const text_class = "column right";

    const Download = (event) => {
        event.preventDefault();
    }

    useEffect(()=>{
         setEvent(
                <Typical
                    steps={[
                        'Web Developer',
                        1000,
                        ' Web Designer',
                        1000,
                    ]}
                    wrapper="b"
                    loop={Infinity}
                />
            );
    },[])
    useEffect(() => {
        let about = document.getElementById("about");
        document.addEventListener('scroll', () => {
            if (window.scrollY > about.offsetTop-250) {
                set_image_class('column left aboutLeftAnimation');
                set_text_class('column right aboutRightAnimation');
            }
        });
    },[]);



    return (
        <>
            <div className={image_class}>
                <img src={me} />
            </div>
            <div className={text_class}>
                <div className="text">Hello I'm Zidan. I'm a <span>
                    {evenT}</span></div>
                <p>I am a Final Year Undergrade Student of Computer Science and Engineering. Currently I am working on Web Development Projects. I have 1 year of experinece on desgning and developing innovative Web Applications. I have skills on building both Static and Dynamic Web Applications. I use modern Web Technologies while building Websites and Web Applications. I have strong professional, presentational and communicational skills to communicate with clients and I always try provide best of my services to them. To know more about me, please feel free to go through my resume attached below. Thank You for visiting my website.</p>
                <a id='download' href={new_cv} traget='_blank'>Download Resume</a>
            </div>

        </>
    );
}

function About() {


    return (
        <>
            <Section sectionClassName="about" id="about" widthClassName="max-width" contentClassName="about-content" titleValue="About Me" content={<AboutContent />} />
        </>
    );
}

export default About;

