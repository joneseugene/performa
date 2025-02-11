import React from 'react'
import CampSite from './CampSite'
import Image from 'next/image'

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage='bg-bg-img-1'
          title="Stay Healthy"
          subtitle="We provide you the best resources needed to be healthy."
          peopleJoined="50+ Joined"
           />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Best Treatment"
          subtitle="We have state of the Art facilities to treat several medical ailments."
          peopleJoined="100 Joined"
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'><strong>Feeling sick</strong>  and don't know how to get healed?</h2>
          <p className='regular-14 xl:regular-16 mt-2 text-white'>
            We provide you the best quality in medical experience and technology. Starting from test accuracy and fast response, to recommended treatments.
          </p>
          <Image className='camp-quote'
            src='/img/quote.svg'
            alt='quote'
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  )
}

export default Camp