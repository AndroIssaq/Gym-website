import Title from './Title'
import img1 from '../assets/team1.webp'
import img2 from '../assets/team2.webp'
import img3 from '../assets/team3.webp'
const OurTeam = () => {
    const team=
    [
        {img:img1,name:'Alex Ramirez',title:'Head Trainer'},
        {img:img2,name:'Sarah Milton',title:'Nutrition Specialist'},
        {img:img3,name:'Robert Turner',title:'Physical Therapist'},
    ]
  return (
    <section className=" w-full">
      <div className="container">
        <Title title={'Our Team'}/>
        <div className="content bg-[#22c55e] " />
        <div className="mt-[50px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                team.map((traner,index)=>{
                    return(
                        <div key={index} className=" p-4 rounded-lg shadow-md">
                            <img src={traner.img} alt="Alex Ramirez" className="rounded-t-lg h-[80%] object-cover w-full" 
                            />
                            <div className="text-center mt-4">
                            <h3 className="text-xl font-semibold">{traner.name}</h3>
                            <p className="text-gray-600">{traner.title}</p>
                            </div>
                      </div>
                    )
                })
            }
       
          
        </div>
      </div>
    </section>
  )
}

export default OurTeam