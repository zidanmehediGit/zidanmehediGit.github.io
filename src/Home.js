import React from 'react';
import Section from './Section';
import me from './Images/z3.jpg';
import Typical from "react-typical";

function HomeContent() {

    return (
        <>
            <img src={me} />
            <div className='text-1'>Hello, My name is</div>
            <div className='text-2'>Mehedi Hassan Zidan</div>
            <div className='text-3'>and I am a <span>
                <Typical
                    steps={[
                        'Web Developer',
                        1000,
                        ' Web Designer',
                        1000,
                    ]}
                    wrapper = "b"
                    loop={Infinity}
                />
            </span></div>
        </>
    );
}

function Home() {

    return (
        <>
            <Section sectionClassName="home" sectionId="home" widthClassName="max-width" contentClassName="home-content" content={<HomeContent />} />
        </>
    );
}

export default Home;