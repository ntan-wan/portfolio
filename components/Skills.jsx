import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
	<div id='skills' className='w-full lg:h-screen p-2'>
		<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
			<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
				skills
			</p>
			<h2>What I Can Do</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/html.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>HTML</h3>
						</div>
					</div>
				</div>

				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/css.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>CSS</h3>
						</div>
					</div>
				</div>

				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/javascript.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>Javascript</h3>
						</div>
					</div>
				</div>
				
				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/react.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>React</h3>
						</div>
					</div>
				</div>

				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/tailwind.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>Tailwind</h3>
						</div>
					</div>
				</div>

				<div className='p-6 shadow-xl rounde-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<Image src={require('/static/images/skills/github1.png')} width='64' height='64' alt='/' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3>Github</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Skills