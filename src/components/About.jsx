
export const About = () => {
  return (
    <div >
          <h3 className='text-center mt-11 text-3xl   '>Japan Culture</h3>
          <div className='flex mt-5 ml-9  '>
          <div  className=" bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40  max-md:mb-6 ml-10 ">
            <h3 className='ml-20 text-xl font-serif  '>Traditional Arts</h3>
            <img src="../../tra.jpg" alt="tradiotinal"  className='ml-3'/>
            <p className='w-[390px] ml-4 '>Japan is famous for its traditional arts such as tea ceremony (sadō), flower arranging (ikebana), calligraphy (shodō), and traditional theater forms like Noh, Kabuki, and Bunraku.</p>
          </div>
          <div className='ml-10  bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40 max-md:mb-6'>
            <h3 className='ml-20 text-xl font-serif'>Japanese Cuisine</h3>
            <img src="../../cuisine.jpg" alt="cuisine"  className='ml-3'/>
            <p className='w-[390px] ml-4 '>Japanese cuisine is highly regarded worldwide. It includes sushi, sashimi, tempura, ramen, and many other dishes. Japanese food emphasizes seasonality, freshness, and presentation.</p>
          </div>
          <div className='ml-10  bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40 max-md:mb-10  '>
            <h3 className='ml-20 text-xl font-serif'>Zen Buddhism</h3>
            <img src="../../buddhism.jpg" alt="buddhism"  className='ml-3'/>
            <p className='w-[390px] ml-4 '> Zen Buddhism has deeply influenced Japanese culture, particularly in arts, aesthetics, and philosophy. Zen gardens, tea ceremonies, and martial arts like Aikido are closely associated with Zen principles.</p>
          </div>
          <div className='ml-10  bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40  '>
            <h3 className='ml-10 text-xl font-serif'>Technology and Innovation</h3>
            <img src="../../tech.jpg" alt="tech"  className='ml-3'/>
            <p className='w-[390px] ml-4 '> Japan is a leader in technology and innovation, with companies like Sony, Toyota, and Nintendo having a significant global presence.</p>
          </div>
          </div>
          <div className='ml-[690px] mt-5 font-serif  bg-red-300 rounded-xl  hover:bg-red-400 shadow-lg shadow-indigo-800/40  w-[520px] max-md:absolute top-[700px]'>
            <h3 className='ml-40 text-xl'>Japan Work LifeStyle</h3>
            <img src="../../work.jpg" alt="work" className='w-[500px]' />
            <p className='w-[500px]'>Japanese lifestyle harmonizes tradition with modernity, emphasizing healthy routines and respect for nature. Seasonal celebrations punctuate the calendar, fostering cultural identity and appreciation for natural beauty. Work-life balance is increasingly valued, complementing traditions like the tea ceremony and Zen practices. Fashion showcases a fusion of old and new, reflecting individual expression and creativity.</p>
          </div>
    </div>
  )
}
