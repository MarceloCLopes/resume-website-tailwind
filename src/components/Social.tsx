import {
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill
} from 'react-icons/ri'

type Props = {
  icon: JSX.Element
  href: string
}

export const social = [
  {
    icon: <RiYoutubeFill />,
    href: ''
  },
  {
    icon: <RiInstagramFill />,
    href: ''
  },
  {
    icon: <RiGithubFill />,
    href: ''
  },
  {
    icon: <RiLinkedinFill />,
    href: ''
  }
]

export const Social = () => {
  return (
    <div className='flex justify-between max-w-[250px] gap-10 mb-9'>
      {social.map((item: Props, index) => {
        return (
          <a
            className='text-3xl hover:text-accent-hover duration-300 transition-all'
            href={item.href}
            key={index}>
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}
