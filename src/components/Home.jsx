import React from 'react'

export const Home = () => {
  return (
    <div className='flex mt-8  '>
      <div className='mr-20 ml-[100px] rounded-xl  bg-red-300 hover:bg-red-400 shadow-lg shadow-indigo-800/40 max-md:absolute left-[600px] '>
          <img src="../../IT.jpg" alt="IT" className='ml-2' />
          <h3 className=' ml-12 text-white text-2xl mt-10'>Technology and IT </h3>
          <p className='w-[290px] ml-4 font-serif h-[200px]'> Japan is home to many technology companies and startups, particularly in Tokyo and other major cities. There's a demand for software engineers, data scientists, IT specialists, and professionals in emerging fields like artificial intelligence and cybersecurity.</p>
      </div>
      <div className='mr-20  bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40  max-md:absolute left-[700px] top-[690px] '>
      <img src="../../finance.jpg" alt="finance" className='ml-5 ' />
          <h3 className=' ml-12 text-white text-2xl mt-3'>Finance</h3>
          <p className='w-[290px] ml-4 font-serif '>Tokyo is one of the leading financial centers in the world. Opportunities exist in banking, investment banking, asset management, and insurance sectors. Proficiency in Japanese and relevant qualifications such as CFA or CPA can be beneficial.</p>
      </div>
      <div className=' bg-red-300  rounded-xl hover:bg-red-400 shadow-lg shadow-indigo-800/40  max-md:absolute left-[700px] top-[1160px]  '>
      <img src="../../education.jpg" alt="education" className='ml-2' />
          <h3 className=' ml-12 text-white text-2xl mt-3'>Education</h3>
          <p className='w-[290px] ml-4 font-serif'>English teaching positions are abundant in Japan, both in private language schools (eikaiwa) and public schools. Programs like the JET Programme recruit foreign English teachers to work in schools across Japan. Additionally, there are opportunities for teaching other subjects in international schools and universities.</p>
      </div>
      <div className='ml-20  bg-red-300 rounded-xl hover:bg-red-400 shadow-lg shadow-indigo-800/40 max-md:absolute left-[630px] top-[1690px] '>
      <img src="../../tourism.jpg" alt="tourism" className='ml-2' />
          <h3 className=' ml-12 text-white text-2xl mt-2'>Tourism and Hospitality</h3>
          <p className='w-[290px] ml-4 font-serif'>  With its rich cultural heritage and tourist attractions, Japan's tourism industry continues to grow. There are opportunities in hotels, restaurants, travel agencies, tour guiding, and related services, particularly in cities like Tokyo, Kyoto, and Osaka.</p>
      </div>
    </div>
  )
}
