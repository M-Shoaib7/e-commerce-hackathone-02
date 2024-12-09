import React from 'react'
import Header2 from '../components/header2'
import Pricing from '../components/pricing'
import Pcard   from '../components/pcard'
import Faqs from '../components/faqs'
import Freetreil from '../components/freetreil'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
      <section className='wraper'>

        <Header2 />
        <Pricing />
        <Pcard />
        <Faqs />
        <Freetreil />
        <Footer />

      </section>
    </>
  )
}

export default page