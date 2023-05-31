import Heading from '@/components/Heading/Heading'
import { aboutData } from '@/helpers/data'
import GetIcon from '@/helpers/icon'
import Link from 'next/link'
import React, { useEffect } from 'react'
// import About from '../components/About/About';
// import Heading from '../components/Heading/Heading';

const HomePage = () => {
  const data = aboutData

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getBgColor = (index: number) => {
    if (index % 6 === 0) {
      return ' bg-soft-gray-lighter'
    } else if (index % 6 === 1) {
      return ' bg-soft-blue'
    } else if (index % 6 === 2) {
      return ' bg-soft-yellow'
    } else if (index % 6 === 3) {
      return ' bg-soft-red'
    } else if (index % 6 === 4) {
      return ' bg-soft-blue-2'
    } else if (index % 6 === 5) {
      return ' bg-soft-orange-red'
    }
    return
  }

  return (
    <>
      <Heading />
      <div className='mt-10 w-full max-w-5xl mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <h2 className='mb-2 mx-5 font-bold text-3xl text-dark-gray'>
              About Me
            </h2>
            <h3 className='mb-3 mx-5 font-bold text-xl text-dark-gray'>
              {data.title}
            </h3>
            <p className='mx-5 font-medium text-lg text-dark-gray-2 text-justify'>
              {data.description}
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className='flex  flex-col gap-3 mx-5 mt-5 border border-solid border-slate-300 border-1 rounded-xl p-3 shadow-md w-full md:w-3/4'>
              {data.profile.map((item, i) => (
                <div
                  className='flex gap-3 items-center'
                  key={i}
                >
                  <div className='rounded-full bg-orange-red text-white p-1'>
                    <GetIcon name={item.icon} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-lg text-dark-gray font-bold'>
                      {item.title}
                    </span>
                    <span className='text-lg text-dark-gray-2 font-semibold'>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className='mt-5 mx-5 font-bold text-3xl text-dark-gray mb-3'>
          My Skills
        </h2>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 mx-5'>
          {data.skills.map((item, i) => (
            <div
              className={`border border-1 border-solid border-dark-gray flex p-2 items-center ${getBgColor(
                i
              )} gap-3`}
              key={i}
            >
              <div
                className={`border border-1 border-dark-gray bg-white p-3 flex items-center justify-center`}
              >
                <GetIcon name={item} />
              </div>
              <span className='text-xl text-dark-gray tracking-wider'>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-around'>
        <Link
          href={'/contact'}
          className='relative transform w-full flex justify-center mt-8 group-hover group '
        >
          <button className='absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray  transition duration-150 ease-in-out'>
            Contact Me
          </button>
          <button className='absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-150 ease-in-out'></button>
        </Link>
        <Link
          href={'/portofolio'}
          className='relative transform w-full flex justify-center mt-8 mb-20 group '
        >
          <button className='absolute z-10 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-150 ease-in-out'>
            Portofolio
          </button>
          <button className='absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray transition duration-150 ease-in-out'></button>
        </Link>
      </div>
    </>
  )
}

export default HomePage
