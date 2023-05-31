import { resume } from '@/helpers/data'
import GetIcon from '@/helpers/icon'
import MainLayout from '@/layouts/MainLayout'
import React, { useEffect } from 'react'
// import ResumeContent from '../components/Resume/ResumeContent';

const Resume = () => {
  const data = resume

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <MainLayout>
      <div>
        <div className='mt-20 mb-10 w-full max-w-5xl mx-auto'>
          <h2 className='text-center tracking-wider mt-8 mb-2 mx-5 font-bold text-3xl text-dark-gray'>
            RESUME
          </h2>
          <div className='mb-3 mx-5'>
            {data.map((item, i) => (
              <div
                className='mb-3'
                key={i}
              >
                <div className='flex gap-3'>
                  <GetIcon name={item.icon} />
                  <h3 className='font-bold text-xl text-dark-gray '>
                    {item.title}
                  </h3>
                </div>
                <ol className='list-item'>
                  {item.items.map((exp, idx) => (
                    <li
                      className='flex justify-start w-full'
                      key={idx + i}
                    >
                      <div className='w-10 top-1 left-2  relative flex flex-col'>
                        <div className='flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red '></div>
                        <div className='flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray '></div>
                      </div>
                      <div className='w-full mb-2'>
                        <h4 className='tracking-wide text-dark-gray font-semibold text-md'>
                          {exp.title}
                        </h4>
                        <div className='flex flex-col w-full'>
                          <span className='text-sm text-orange-red'>
                            {exp.date}
                          </span>
                          <span>
                            {exp.gpa} {exp.gpa.length > 0 && <br />}{' '}
                            {exp.description}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Resume
