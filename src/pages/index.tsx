import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import YouTube from 'react-youtube'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: '/weddingWebsite2.jpg',
    thumbnail: '/weddingWebsite2.jpg',
  },
  {
    original: '/weddingWebsite4.jpg',
    thumbnail: '/weddingWebsite4.jpg',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dtindahouse</title>
      </Head>
      <div className="p-5 top-0 bg-[#c3b091] md:flex fixed z-10 shadow-xl w-screen">
        <p className="font-script lg:text-5xl md:text-4xl text-3xl text-[#ffe4c4]">
          #dtindahouse
        </p>
        <p className="ml-5 font-script font-bold lg:text-5xl md:text-4xl text-3xl text-white transform hover:scale-[1.1] origin-left transition duration-500">
          Kok Tim & Dawn Hui
        </p>
      </div>
      <div className="sm:flex h-full sm:h-screen w-full bg-[#fbf9f7] mt-[88px]">
        <div className="relative sm:w-2/3 w-full">
          <p className="font-script z-[5] text-[#fbf9f7] lg:text-4xl text-xl sm:text-2xl absolute sm:fixed bottom-5 left-5 sm:left-10">
            1 Corinthians 13:8 - Love never fails.
          </p>
          <ImageGallery
            items={images}
            infinite
            autoPlay
            showNav
            showThumbnails={false}
            showPlayButton={false}
            slideDuration={1500}
            slideInterval={7000}
            // originalClass="object-center object-cover"
            additionalClass="object-cover object-center sm:fixed sm:left-0 sm:h-screen  h-full cursor-default bg-[#fbf9f7]"
          />
        </div>
        <div className="sm:w-1/3 w-full bg-[#fbf9f7] absolute right-0">
          <div className="mx-5 mb-10 sm:m-15">
            <p className="mt-16 font-roboto text-lg tracking-wider lg:text-xl xl:text-2xl text-[#c3b091] w-full text-center">
              TOGETHER WITH THEIR FAMILIES
            </p>
            <p className="font-script text-6xl w-full text-center mt-5">
              Kok Tim
            </p>
            <p className="font-script text-6xl w-full text-center mt-3">&</p>
            <p className="font-script text-6xl w-full text-center mb-5">
              Dawn Hui
            </p>
            <p className="mt-10 font-roboto tracking-wider text-lg lg:text-xl xl:text-2xl text-[#c3b091] w-full text-center">
              INVITE YOU TO CELEBRATE
              <br />
              THEIR WEDDING
            </p>
            <p className=" text-2xl md:text-3xl my-10 w-full text-center font-roboto">
              Sunday | 7 November 2021 | 10am
            </p>
            <a
              href="https://www.youtube.com/watch?v=ST17VRpVvdc"
              target="_blank"
              className="mt-10"
            >
              {/* <div className="flex items-center justify-center">
                <FaYoutube size={50} color="#FF0000" />
                <p className="font-bold ml-2 text-2xl">YouTube</p>
              </div> */}
            </a>
          </div>

          <div className="sm:m-5 lg:m-10 mb-10 sm:mb-0">
            <p className="mt-5 font-roboto tracking-wider text-lg lg:text-xl xl:text-2xl text-[#c3b091] w-full text-center">
              WITNESS OUR MARRIAGE!
            </p>
            <YouTube
              videoId="ST17VRpVvdc"
              containerClassName="w-full mt-3 aspect-w-16 aspect-h-9"
              className="w-full"
            />
          </div>

          <div className="sm:m-5 lg:m-10 sm:rounded-2xl bg-[#f7e7ce]">
            <p className="font-roboto tracking-wider text-lg lg:text-xl xl:text-2xl text-[#c3b091] w-full text-center pt-2">
              BLESS US!
            </p>
            <div className="flex flex-col py-5">
              <div className="flex items-center mx-5 mb-2">
                <img
                  src="pngegg.png"
                  alt="bankCard"
                  className="lg:w-16 lg:h-16 sm:w-14 sm:h-14 w-20 h-20"
                />
                <div className="ml-5">
                  <p>Foong Dawn Hui - Maybank</p>
                  <p>112241195180</p>
                </div>
              </div>
              <div className="flex items-center mx-5">
                <img
                  src="pngegg.png"
                  alt="bankCard"
                  className="lg:w-16 lg:h-16 sm:w-14 sm:h-14 w-20 h-20"
                />
                <div className="ml-5">
                  <p>Wong Kok Tim - CIMB</p>
                  <p>7005779973</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
