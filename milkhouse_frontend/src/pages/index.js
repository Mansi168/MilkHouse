import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonial';
import Features from '../components/Features';
import InfoSection from '../components/InfoSection';
import Services from '../components/ServicesSection';
import AppPromoSection from '../components/AppPromoSection/AppPromoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           {/* <Sidebar isOpen={isOpen} toggle={toggle}/>*/}
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection/>
            <Services/>
            <Features/>
            {/* <Testimonial/> */}
            <AppPromoSection/>
            <Footer/>
        </>
    )
}

export default Home;