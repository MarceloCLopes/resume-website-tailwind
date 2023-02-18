import { contributors } from '../data'

export const Contributors = () => {
  return (
    <section id='contributors' className='section'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {contributors.title} <span className='dot' />
        </h2>
        <p className='section-subtitle'>{contributors.subtitle}</p>
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-52'>
          {contributors.brands.map((brand, index) => {
            return (
              <div className='max-w-[260px] h-24 flex items-center'>
                <img src={brand.image} alt='logo company' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
