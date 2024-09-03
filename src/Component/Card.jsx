import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";


function Card({ icon: Icon, image, value, title }) {
    return (
        <>
            <div className="max-w-48 rounded-[15px]  p-4 overflow-hidden bg-gray-950/50 shadow-2xl hover:shadow-indigo-500/80 transition-shadow duration-800">
                <div className="flex items-center">
                    <span className='text-white text-4xl'>
                        {image? <img src={image} alt={title} /> : <Icon/>}
                    </span>
                    <div className="ml-4">
                        <div className="text-xl font-bold text-white">{value}</div>
                        <div className="text-white">{title}</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card