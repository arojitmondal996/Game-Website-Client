// import React from 'react';
// import { NavLink, useLoaderData } from 'react-router-dom';
// import { CiHeart } from "react-icons/ci";


// const ReviewDetails = ({ game }) => {
//     const games = useLoaderData();
//     const { _id, gameCover, gameTitle, reviewDescription, rating, publishingYear, genre } = games;

//     const handleDetails = _id => {
//         console.log(_id)

//         fetch(`https://assignment-10-server-ten-kohl.vercel.app/${_id}`, {})
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }
//     return (
//         <>
//             <div className='flex justify-center items-center mt-10 mb-10'>
//                 <div className="card card-side bg-black shadow-xl h-[500px] w-[800px]">
//                     <figure>
//                         <img className='w-[500px] h-full'
//                             src={gameCover}
//                             alt="Movie" />
//                     </figure>
//                     <div className="card-body text-white mt-5">
//                         <h2 className="card-title text-3xl font-bold">{gameTitle}</h2>
//                         <div className='mt-20'>
//                             <p>Description : {reviewDescription}</p>
//                             <p className='mt-2'>Rating : {rating}</p>
//                             <p className='mt-2'>PublishYear : {publishingYear}</p>
//                             <p className='mt-2'>Genre : {genre}</p>
//                             <NavLink to={`/gameWatchList/${_id}`} className="card-actions mt-28">
//                             <button onClick={() => handleDetails(_id)} className="btn text-white bg-[#0056b3]"><CiHeart />Add to WatchList</button>
//                         </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ReviewDetails;


import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from '../AuthProvider/AuthPRovider';

const ReviewDetails = () => {
    const games = useLoaderData();
    const { _id, gameCover, gameTitle, reviewDescription, rating, publishingYear, genre } = games;

    // Get the logged-in user
    const { user } = useContext(authContext);

    // Handle Add to WatchList
    const handleAddToWatchlist = (_id) => {
        if (!user?.email || !user?.displayName) {
            toast.error("You need to be logged in to add to your WatchList.");
            return;
        }

        // Prepare the data to send to the server
        const watchlistItem = {
            gameCover,
            gameTitle,
            reviewDescription,
            rating,
            publishingYear,
            genre,
            userEmail: user.email,
            userName: user.displayName,
            addedAt: new Date(),
        };

        // API call to add the item to the watchlist
        fetch("https://assignment-10-server-ten-kohl.vercel.app/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(watchlistItem),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data?.acknowledged) {
                    toast.success("Added to WatchList!");
                } else {
                    toast.error("Failed to add to WatchList.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("Something went wrong.");
            });
    };

    return (
        <>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <div className="card card-side bg-black shadow-xl h-[500px] w-[800px]">
                    <figure>
                        <img className='w-[500px] h-full' src={gameCover} alt="Game Cover" />
                    </figure>
                    <div className="card-body text-white mt-5">
                        <h2 className="card-title text-3xl font-bold">{gameTitle}</h2>
                        <div className='mt-20'>
                            <p>Description : {reviewDescription}</p>
                            <p className='mt-2'>Rating : {rating}</p>
                            <p className='mt-2'>Publish Year : {publishingYear}</p>
                            <p className='mt-2'>Genre : {genre}</p>
                            <div className="card-actions mt-28">
                                <button
                                    onClick={() => handleAddToWatchlist(_id)}
                                    className="btn text-white bg-[#0056b3] flex items-center gap-2"
                                >
                                    <CiHeart /> Add to WatchList
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ReviewDetails;
