import React from 'react';
import { NavLink } from 'react-router-dom';

const AllReviewCard = ({ game }) => {
    const { _id, gameCover, gameTitle, reviewDescription, rating, publishingYear, genre } = game;

    const handleDetails = (_id) => {
        console.log(_id);

        fetch(`https://assignment-10-server-ten-kohl.vercel.app/${_id}`, {})
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div className="card bg-black max-w-full sm:max-w-md md:max-w-sm lg:w-[400px] shadow-xl mx-auto">
            <figure>
                <img
                    src={gameCover}
                    alt="Game Cover"
                    className="rounded-t-lg w-full h-60 object-cover"
                />
            </figure>
            <div className="card-body text-white text-center p-4">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{gameTitle}</h2>
                <p className="text-sm md:text-base">
                    <strong>Review Description:</strong> {reviewDescription}
                </p>
                <p className="text-sm md:text-base">
                    <strong>Rating:</strong> {rating}
                </p>
                <p className="text-sm md:text-base">
                    <strong>Publishing Year:</strong> {publishingYear}
                </p>
                <p className="text-sm md:text-base">
                    <strong>Genre:</strong> {genre}
                </p>
                <div className="mt-4">
                    <NavLink to={`/reviewDetails/${_id}`}>
                        <button
                            onClick={() => handleDetails(_id)}
                            className="btn text-white bg-[#0056b3] hover:bg-[#004494] px-4 py-2 rounded">
                            Explore Details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AllReviewCard;


// /////////////////////////////

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const AllReviewCard = ({ game }) => {

//     const {_id, gameCover, gameTitle, reviewDescription, rating, publishingYear, genre} = game;

//     const handleDetails = _id => {
//         console.log(_id)

//         fetch(`https://assignment-10-server-ten-kohl.vercel.app/${_id}`, {})
//         .then(res => res.json())
//         .then(data => console.log(data))
//     }
//     return (
//         <>
//             <div className="card bg-black w-[430px] h-[600px] shadow-xl">
//                 <figure className="">
//                     <img
//                         src={gameCover}
//                         alt="Shoes"
//                         className="rounded-xl h-80" />
//                 </figure>
//                 <div className="card-body text-white items-center text-center">
//                     <h2 className="card-title text-3xl">{gameTitle}</h2>
//                     <p>ReviewDescription : {reviewDescription}</p>
//                     <p>Rating : {rating}</p>
//                     <p>PublishingYear : {publishingYear}</p>
//                     <p>Genre : {genre}</p>
//                     <NavLink to={`/reviewDetails/${_id}`} className="card-actions">
//                         <button onClick={()=>handleDetails(_id)} className="btn text-white bg-[#0056b3]">
//                             Explore Details</button>
//                     </NavLink>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AllReviewCard;