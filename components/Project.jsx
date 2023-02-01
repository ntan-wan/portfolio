import React from 'react'
import ProjectItem from './ProjectItem';
import propertyImg from '../static/images/projects/property.jpg'
import cryptoImg from '../static/images/projects/crypto.jpg'
import netflixImg from '../static/images/projects/netflix.jpg'
import twitchImg from '../static/images/projects/twitch.jpg'

const Project = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p> 
            <h2 className='py-4'>What I&#39;ve built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property'/>
                <ProjectItem title='Crypto App' backgroundImg={cryptoImg} projectUrl='/crypto'/>
                <ProjectItem title='Netflix' backgroundImg={netflixImg} projectUrl='/netflix'/>
                <ProjectItem title='Twitch' backgroundImg={twitchImg} projectUrl='/twitch'/>
            </div>
        </div>
    </div>
  )
}

export default Project