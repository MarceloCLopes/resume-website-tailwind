import { useEffect, useState } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll'

export const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 200 ? setShow(true) : setShow(false)
    })
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className='btn bg-accent w-14 h-14 fixed bottom-[10%] right-[10%] z-50 transition-all'>
        <div className='text-3xl'>
          <RiArrowUpSLine className='w-6 h-6 font-bold' />
        </div>
      </button>
    )
  )
}
