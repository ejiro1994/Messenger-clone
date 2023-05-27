import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div
        className='
      flex
      min-h-screen
      flex-col
      justify-center
      py-12 
      sm:px-6 
      lg:px-8
    bg-gray-100'
      >
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Image
            alt='logo'
            height='48'
            width='48'
            className='mx-auto w-auto'
            src='/images/messenger.webp'
          />
          <h2
            className='
        textgray900
          mt-6
          text-center
          text-3xl
          font-bold
          tracking-tight
          '
          >
            Sign into your account
          </h2>
        </div>
        {/* TODO Authform */}
      </div>
    </div>
  )
}
