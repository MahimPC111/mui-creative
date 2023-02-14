import React from 'react';
import OurWorks from '../OurWorks/OurWorks';
import Branding from '../Branding/Branding';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Branding />
            <Brands />
            <Services />
            <OurWorks />
            <Reviews />
            <FAQ />
        </div>
    );
};

export default Home;