import React from 'react'
import { copyrightSign, shopLogo } from '../assets/icons'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
        <h2 className='text-3xl font-palanquin text-primary font-bold '>Fandisha's Bundles </h2>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get ready for the new season with stunning styles from your nearest hair store. Find your perfect look in-store and earn rewards.
          </p>
          <div  className='flex items-center gap-5 mt-8'>
            {socialMedia.map(icon => (
              <div  className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div  className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map(section => (
            <div key={section.title}>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{section.title}</h4>
            <ul>
              {section.links.map(link => (
                <li key={link.name} className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-primary'>
                  <a href={link.link}>{ link.name}</a>
                </li>
              ))}
            </ul>
          </div>))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="Copyright Sign" width={20} height={20}   className='rounded-full m-0'/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
