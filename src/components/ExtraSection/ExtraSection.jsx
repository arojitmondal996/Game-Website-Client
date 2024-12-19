import React from 'react';
import image from "../../assets/extrasection.jpg";

const ExtraSection = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="card flex flex-col lg:flex-row items-center justify-around bg-black shadow-xl">
                {/* Image Section */}
                <figure className="w-full lg:w-1/2">
                    <img
                        className="w-full lg:w-[750px] h-auto object-cover"
                        src={image}
                        alt="Special Drops"
                    />
                </figure>

                {/* Content Section */}
                <div className="card-body flex flex-col items-start justify-center text-white p-6 lg:w-1/2">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                        Hello Players!
                    </h1>
                    <p className="text-[#797979] text-sm lg:text-base mb-6">
                        December's Special Drops is here to bring coziness and comfort.
                        Don't miss out on a variety of rewards, including the brand-new
                        Black Market Loot Cache Fragments, which can be used to craft
                        Loot Caches at the Workshop!
                    </p>
                    <div className="card-actions">
                        <button className="btn bg-[#007bff] text-white hover:bg-blue-600">
                            Listen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
