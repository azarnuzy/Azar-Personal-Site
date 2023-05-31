import Image from 'next/image'
import { BiBall, BiEnvelope, BiFootball, BiUser } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaSass,
  FaLocationArrow,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiLaravel,
  SiBootstrap,
  SiFlutter,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiTailwindcss,
} from 'react-icons/si'

type GetIconProps = {
  name: string
}

const GetIcon: React.FC<GetIconProps> = ({ name }) => {
  switch (name) {
    case 'HTML':
      return <FaHtml5 className='text-2xl text-orange-500 text-current ' />
    case 'CSS':
      return <FaCss3Alt className='text-2xl text-blue-600 text-current' />
    case 'Javascript':
      return <FaJs className='text-2xl text-yellow-400 text-current' />
    case 'NextJs':
      return <SiNextdotjs className='text-2xl text-gray-900 text-current' />
    case 'Typescript':
      return <SiTypescript className='text-2xl text-blue-800 text-current' />
    case 'Vue Js':
      return <FaVuejs className='text-2xl text-green-600 text-current' />
    case 'TailwindCSS':
      return <SiTailwindcss className='text-2xl text-blue-600 text-current' />
    case 'Laravel':
      return <SiLaravel className='text-2xl text-orange-600 text-current' />
    case 'Bootstrap':
      return <SiBootstrap className='text-2xl text-purple-600 text-current' />
    case 'C++':
      return (
        <Image
          src='./c++.svg'
          alt='icon'
          className='w-5 h-5 bg-gray-500'
          width={20}
          height={20}
        />
      )
    case 'C':
      return (
        <Image
          src='./c_icon.svg'
          alt='icon'
          className='w-5 h-5 bg-gray-500'
          width={20}
          height={20}
        />
      )
    case 'Flutter':
      return <SiFlutter className='text-2xl text-blue-500 text-current' />
    case 'Figma':
      return <SiFigma className='text-2xl text-red-500 text-current' />
    case 'Git':
      return <SiGit className='text-2xl text-orange-400 text-current' />
    case 'Github':
      return <SiGithub className='text-2xl text-dark-gray text-current' />
    case 'Gitlab':
      return <SiGitlab className='text-2xl text-orange-500 text-current' />
    case 'user':
      return (
        <BiUser
          className='text-2xl text-white'
          text-inherit
          curtext-current
        />
      )
    case 'map':
      return (
        <FaMapMarkerAlt
          className='text-2xl text-white'
          text-inherit
          curtext-current
        />
      )
    case 'mail':
      return (
        <BiEnvelope
          className='text-2xl text-white'
          text-inherit
          curtext-current
        />
      )
    case 'ball':
      return (
        <BiFootball
          className='text-2xl text-white'
          text-inherit
          curtext-current
        />
      )
    default:
      return null // return null if no matching icon found
  }
}

export default GetIcon
