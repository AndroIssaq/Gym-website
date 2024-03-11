import React from 'react'
import Button from '../components/Button'
import Panner from '../components/Panner'
import img from '../assets/pexels-the-lazy-artist-gallery-2247179.jpg'
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";
const Services = () => {
    const [data, setData] = useState([]);
    const client = createClient({
      space: "4i5bqb3u6o2i",
      environment: "master", // defaults to 'master' if not set
      accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
    });
  
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "classes",
        });
        console.log(response);
        setData(response.items);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [ t,i18n]  = useTranslation();
    const lang = i18n.language;
    const reversedData=data.reverse()
    console.log(reversedData);
  return (
   <section className='flex items-center justify-center flex-col'>
        <Panner title={'Classes'}/> 
        <div className="container flex items-center justify-center flex-col   ">
            {
                reversedData.map((clas,index)=>{
                  console.log(clas.fields.right);
                    return(
                        <div key={index}  className={`flex  mt-[50px] mb-[50px] ${clas.fields.right===false ?  'xl:flex-row-reverse lg:flex-row-reverse flex-row-reverse' : 'xl:flex-row lg:flex-row flex-row'} md:flex-col sm:flex-col flex-col  w-full items-center justify-center gap-[50px]`}>
                        <div className="flex-[1] lg:h-[90vh] md:h-[80vh] sm:h-[60vh] h-[60vh]">
                            <img src={"http:" + clas.fields?.img?.fields?.file?.url} alt="Weightlifting" className="h-full w-full rounded-md object-cover"/>
                        </div>
                        <div className={`flex-[1] ${lang==='ar'&& 'items-end text-end'}   flex flex-col gap-[20px] `}>
                        <span className='w-[40px] h-[40px] bg-[#fff] rounded-md text-center flex items-center text-[20px] font-extrabold justify-center text-mainColor'>{clas?.fields?.numberOfClassEn}</span>
                            <div className="flex items-center   gap-[20px]">
                                <h1 className="text-5xl font-bold">
                                {lang === "en"
                                ? clas?.fields?.classNameEn
                                : clas?.fields?.classNameAr
                                }
                                </h1>
                            </div>  
                            <p className="">
                              {lang === "en"
                                ? clas?.fields?.descriptionEn
                                : clas?.fields?.descriptionAr
                              }
                            </p>
                            <p className="font-semibold ">
                              {lang === "en"
                                ? clas?.fields?.benefitsEn
                                : clas?.fields?.benefitsAr
                              }
                            </p>
                            <Button name={t('Join To Class')}/>
                      </div>
                    </div>
                    )
                })
            }

        </div>
   </section>
  )
}

export default Services