import { contact } from '../data'
import { Social } from './Social'
import logoImg from '../assets/img/logo.svg'

export const Contact = () => {
  return (
    <section
      id='contact'
      className='section before:content-ornament before:flex before:justify-center lg:before:mb-11'>
      <div className='container mx-auto'>
        <h2 className='section-title text-accent'>{contact.title}</h2>
        <p className='section-subtitle'>{contact.subtitle}</p>

        <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
          <img src={logoImg} alt='' className='w-full' />
        </div>

        <div className='flex justify-center'>
          <Social />
        </div>
      </div>
    </section>
  )
}
