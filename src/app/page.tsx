import React from 'react'
import Ubheader from './components/ubheader';
import Header from "./components/header";
import Hero from './components/hero';
import Edit from './components/edit';
import Seller from './components/seller';
import Cursour from './components/cursour';
import Universal from './components/universal';
import Feature from './components/feature';
import Footer from './components/footer';





const Home = () => {
  return (
    <>
    {/* header section start */}
    <section>
    <Ubheader />
    <Header />
     <Hero />
     <Edit />
    <Seller />
    <Cursour />
    <Universal />
    <Feature />
    <Footer />
   </section> 
   </>
  )
}

export default Home