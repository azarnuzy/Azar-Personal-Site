import { projects } from '@/helpers/data'
import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'

function PortofolioPage() {
  const data = projects

  return (
    <MainLayout>
      <div className='mt-20 mb-10 w-full max-w-5xl mx-auto'>
        <h2 className='text-center tracking-wide mt-8 mb-10 mx-5 font-medium text-4xl text-dark-gray'>
          PORTOFOLIO
        </h2>
        <div className='flex flex-col gap-3 '>
          {data.map((item, i) => {
            return (
              <div
                className={`mx-5 flex ${
                  i % 2 == 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'
                } flex-col sm:gap-8`}
                key={i}
              >
                <a
                  href={item.linkProject}
                  target='_blank'
                  className='w-full md:max-w-100  border-2 border-solid border-dark-gray shadow-sm hover:border-b-4 hover:border-r-4 transition ease-in-out duration-300 h-[220px] mb-5 overflow-hidden'
                >
                  <Image
                    src={`/images/${item.imgUrl}`}
                    alt='Image'
                    width={400}
                    height={400}
                    className='h-full object-cover object-top'
                  />
                </a>
                <div className='md:min-w-[600px]'>
                  <span
                    className={`${
                      item.type === 'Website' ? 'bg-soft-red' : 'bg-soft-blue'
                    } text-dark-gray text-lg tracking-wider rounded-3xl px-3 py-1 my-3`}
                  >
                    {item.type}
                  </span>
                  <h2 className='text-bold tracking-wide font-semibold text-dark-gray my-3 text-2xl'>
                    {item.title}
                  </h2>
                  <p className='text-dark-gray-2 text-md'>{item.description}</p>
                  <a
                    href={`${item.linkProject}`}
                    target='_blank'
                    className='relative transform w-full flex justify-start mt-8 mb-20 group text-md'
                  >
                    <button className='absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray transition duration-300 ease-in-out'>
                      VIEW PROJECT
                    </button>
                    <button className='absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-300 ease-in-out'></button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default PortofolioPage
