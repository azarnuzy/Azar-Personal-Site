// import FileSaver from 'file-saver'
import {
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
const Heading = () => {
  return (
    <div className='hero-background relative overflow-hidden '>
      <div className='flex flex-col md:flex-row md:justify-start max-w-5xl w-full md:mx-auto items-center mt-28'>
        <div className='flex flex-col md:items-start md:-mt-10 items-center w-full md:mx-5'>
          <div className='tracking-wider text-dark-gray font-semibold text-xl md:text-2xl flex'>
            Hi{' '}
            <Image
              width={6}
              height={6}
              src={'/images/Hand.gif'}
              alt='Hand.gif'
              className='w-6 h-6'
            />
            , my name is Azar
          </div>
          <div className='text-3xl md:text-5xl font-bold text-dark-gray mt-7'>
            I'M WEB DEVELOPER
          </div>
          <div className='text-lg font-medium mt-6 text-dark-gray-2 tracking-wider'>
            Based in Bandung, Indonesia
          </div>
          <div className='relative w-full flex justify-center md:justify-start  mt-8'>
            <Link
              className='absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md'
              href='/cv_m_azar_nuzy.pdf'
            >
              Download CV
            </Link>
            <button className='absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md'></button>
          </div>
        </div>
        <div className='flex flex-col  w-full items-center'>
          <div className='mt-24 md:mt-16 md:mb-8 hero-banner bg-soft-blue'>
            <Image
              width={200}
              height={200}
              src={'/images/hero2.png'}
              className='w-52 md:w-80'
              alt='hero-img'
            />
          </div>
        </div>
      </div>
      <div className='mt-14 w-full flex justify-center bg-dark-gray h-20 px-5'>
        <ul className='flex gap-3 w-full h-20 items-center text-white justify-between text-2xl max-w-5xl '>
          <Link
            href='https://www.linkedin.com/in/muhammadazarnuzy/'
            target={'_blank'}
          >
            <BsLinkedin />
          </Link>
          <Link
            href='https://github.com/azarnuzy'
            target={'_blank'}
          >
            <BsGithub />
          </Link>
          <Link
            href='https://twitter.com/azar_nuzy'
            target={'_blank'}
          >
            <BsTwitter />
          </Link>
          <Link
            href='https://www.instagram.com/azar_nuzy/'
            target={'_blank'}
          >
            <BsInstagram />
          </Link>
          <Link
            href='mailto: azarnuzy@gmail.com'
            target={'_blank'}
          >
            <BsEnvelopeFill />
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Heading
