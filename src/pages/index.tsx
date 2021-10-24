import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import YouTube from 'react-youtube'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: '/weddingWebsite.jpg',
    thumbnail: '/weddingWebsite.jpg',
    originalClass: 'object-cover object-center w-full h-full',
  },
  {
    original: '/weddingWebsite2.jpg',
    thumbnail: '/weddingWebsite2.jpg',
    originalClass: 'object-cover object-center w-full h-full',
  },
  {
    original: '/weddingWebsite3.jpg',
    thumbnail: '/weddingWebsite3.jpg',
    originalClass: 'object-cover object-center w-full h-full',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dtindahouse</title>
      </Head>
      <div className="p-5 top-0 relative bg-[#c3b091] md:flex sticky z-10 shadow-xl">
        <p className="font-script lg:text-5xl md:text-4xl text-3xl text-[#ffe4c4]">
          #dtindahouse
        </p>
        <p className="ml-5 font-script font-bold lg:text-5xl md:text-4xl text-3xl text-white transform hover:scale-[1.1] origin-left transition duration-500">
          Holy Matrimony of Dawn Hui & Kok Tim
        </p>
      </div>
      <div className="sm:flex sm:h-screen lg:h-full">
        {/* <img
                    className="object-cover object-center sm:w-2/3 w-full h-full"
                    src="weddingWebsite.jpg"
                /> */}
        <ImageGallery
          items={images}
          infinite
          autoPlay
          showNav={false}
          showThumbnails={false}
          showPlayButton={false}
          slideDuration={1000}
          slideInterval={5000}
          additionalClass="object-cover object-center sm:w-2/3 w-full h-full"
        />
        <div className="sm:w-1/3 w-full bg-[#fbf9f7]">
          <div className="mx-10 mb-10 sm:m-15">
            <p className="font-passion text-2xl lg:text-3xl xl:text-4xl text-[#c3b091] w-full text-center">
              SAVE THE DATES!
            </p>

            <p className="font-sans text-2xl md:text-3xl mt-3 w-full text-center">
              Sunday, 7 October 2021
            </p>
          </div>

          <div className="sm:m-10 lg:m-15">
            <p className="font-passion text-2xl lg:text-3xl xl:text-4xl text-[#c3b091] w-full text-center">
              Join Us On Live!
            </p>
            <YouTube
              videoId="ST17VRpVvdc"
              containerClassName="w-full mt-3 aspect-w-16 aspect-h-9"
              className="w-full"
            />
          </div>

          <div className="sm:m-10 lg:m-15 sm:rounded-2xl bg-[#f7e7ce]">
            <p className="font-passion text-2xl lg:text-3xl xl:text-4xl text-[#c3b091] w-full text-center pt-2">
              Bless Us!
            </p>
            <div className="flex justify-around py-5">
              <div className="flex flex-col items-center">
                <img
                  src="https://play-lh.googleusercontent.com/sJ63Y_EFmkJuOeY7R9gJLjs9FAHYHxFxyuF0RJ0caALJJWL3srmdhuucyCjTnV-GpRg"
                  alt="tng"
                  className="lg:w-16 lg:h-16 sm:w-14 sm:h-14 w-20 h-20"
                />
                <p>Wong Kok Tim</p>
                <p>016-6663789</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.nicepng.com/png/full/42-422061_credit-card-.png"
                  alt="bankCard"
                  className="lg:w-16 lg:h-16 sm:w-14 sm:h-14 w-20 h-20"
                />
                <p>Wong Kok Tim - CIMB</p>
                <p>7005779973</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
