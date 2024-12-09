import React from 'react'
import Header2 from '../components/header2'
import Contactmain from '../components/contactmain'
import Location from '../components/location'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
      <section>
        <Header2 />
        <Contactmain />
        <Location />
        <Footer />
      </section>
    </>
  )
}

export default page