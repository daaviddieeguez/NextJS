import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src="/Megasur_logo.jfif"
      alt="Descripción de la imagen"
      width={300}
      height={300}
      className='object-cover'
    />
  );
}