import React from 'react';
import Section from './Section';
import BrushRoundedIcon from '@material-ui/icons/BrushRounded';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';

function ServicesContent() {
    const myServices = [
        {
            key : 1,
            serviceIcon : <BrushRoundedIcon className='icon' />,
            serviceName : 'Web Design',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis enim perspiciatis, rerum animi a.'
        },
        {
            key : 2,
            serviceIcon : <DeveloperModeRoundedIcon className='icon' />,
            serviceName : 'Web Developing',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis enim perspiciatis, rerum animi a.'
        },
    ];

    const serviceS = (arr, index)=>{
        return(
            <div className="card" key = {index}>
                <div className="box">
                    {arr.serviceIcon}
                    <div className='text'>{arr.serviceName}</div>
                    <p>{arr.description}</p>
                </div>
            </div>
        );
    }
 
    return (
        <>
            {myServices.map(serviceS)}
        </>
    );
}

function Services() {
    return (
        <>
            <Section sectionClassName="services" sectionId="services" widthClassName="max-width" contentClassName="serv-content" titleValue="My Services" content={<ServicesContent/>} />
        </>
    );
}

export default Services;