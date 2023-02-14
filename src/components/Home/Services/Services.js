import { Box, Grid } from '@mui/material';
import React from 'react';
import Service from './Service';
import phone from '../../../assets/services/phone.png'
import color from '../../../assets/services/color.png'
import code from '../../../assets/services/code.png'
import SectionTitle from '../../../shortComponents/SectionTitle/SectionTitle';

const Services = () => {
    const services = [
        {
            image: code,
            title: 'Web development',
            details: "Web design refers to the design and creation of websites for the internet. It encompasses all aspects of a website's visual appearance and user experience, including layout, color scheme, typography, and functionality. Mobile design is the design of apps and websites specifically for mobile devices such as smartphones and tablets. Mobile design must consider the smaller screen size, touch-screen interface, and varying screen resolutions of these devices, and should aim to provide a user-friendly and optimized experience for users on the go."
        },
        {
            image: color,
            title: 'Graphic design',
            details: "Web development refers to the process of creating and maintaining websites. It encompasses a wide range of tasks, including web design, content creation, programming, security, and website optimization. Web developers use a variety of technologies, such as HTML, CSS, JavaScript, and databases, to build and enhance websites and web applications."
        },
        {
            image: phone,
            title: 'Web & Mobile design',
            details: "Graphic design is the art and practice of creating visual content to communicate information to an audience. It involves combining various elements such as images, typography, color, and texture to create visual representations of ideas and messages. Graphic designers work in a variety of mediums, including print materials, digital media, product packaging, and advertising. The goal of graphic design is to effectively communicate a message and to make a lasting impact on the viewer."
        }
    ]

    return (
        <Box>
            <Box sx={{ mb: 4 }}>
                <SectionTitle title='Provide awesome' colored='Services' />
            </Box>

            <Grid container spacing={3}>
                {
                    services.map((service, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Service service={service} key={i} />
                        </Grid>
                    ))
                }
            </Grid>

        </Box>
    );
};

export default Services;