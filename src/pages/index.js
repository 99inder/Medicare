import React from 'react'
import Clinic from '../components/Clinic';
import Footer from '../components/Footer';
import Header from '../components/header';
import Hero from '../components/Hero';
import News from '../components/News';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Specialists from '../components/Specialists';
import "../styles/style.css";

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Clinic />
      <Specialists />
      <Reviews />
      <News />
      <Footer />
    </>
  )
}

export default index;