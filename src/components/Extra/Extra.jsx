import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import image from "../../assets/banner1.jpg";
import image2 from "../../assets/extra2.jpg";
import image3 from "../../assets/extra3.jpg";
import image4 from "../../assets/extra4.jpg";
import image5 from "../../assets/extra5.jpg";
import image6 from "../../assets/extra6.jpg";

const Extra = () => {
    const images = [image, image2, image3, image4, image5, image6];

    return (
        <div className="mt-10 px-4 md:px-8 lg:px-12 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
                <Fade>Time to Fight</Fade>
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {images.map((img, index) => (
                    <NavLink
                        key={index}
                        to="/login"
                        className="card bg-base-100 image-full w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-72 sm:h-80 md:h-96 mx-auto shadow-xl"
                    >
                        <figure>
                            <img
                                src={img}
                                alt={`Extra ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </figure>
                        <div className="card-body flex flex-col justify-center items-center text-center">
                            <h2 className="card-title text-lg md:text-xl lg:text-2xl">PlayGround!</h2>
                            <p className="text-sm md:text-base">Are you ready to explore it?</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Extra;
