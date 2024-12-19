import { useEffect, useState } from 'react';


const HighestRatedGames = () => {
    const [games, setGames] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/rating")
            .then(res => res.json())
            .then(data => setGames(data))
        // .then((res) => {
        //     // console.log(response)
        //     // setGames(response.data);
        //     setLoading(false);
        // })
        // .catch((error) => {
        //     console.error("Error fetching highest-rated games:", error);
        //     setLoading(false);
        // });
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    games.map(game => <div key={game._id} className="card bg-black max-w-full sm:max-w-md md:max-w-sm lg:w-[400px] shadow-xl mx-auto">
                        <figure>
                            <img
                                src={game.gameCover}
                                alt="Game Cover"
                                className="rounded-t-lg w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="card-body text-white text-center p-4">
                            <h2 className="card-title text-lg md:text-xl lg:text-2xl justify-center text-center">{game.gameTitle}</h2>
                            <p className="text-sm md:text-base">
                                <strong>Review Description:</strong> {game.reviewDescription}
                            </p>
                            <p className="text-sm md:text-base">
                                <strong>Rating:</strong> {game.rating}
                            </p>
                            <p className="text-sm md:text-base">
                                <strong>Publishing Year:</strong> {game.publishingYear}
                            </p>
                            <p className="text-sm md:text-base">
                                <strong>Genre:</strong> {game.genre}
                            </p>
                            <div className="mt-4">
                                {/* <NavLink to={`/reviewDetails/${_id}`}> */}
                                    <button
                                        onClick={() => handleDetails(_id)}
                                        className="btn text-white bg-black rounded-2xl hover:bg-[#004494] px-4 py-2">
                                        Explore Details
                                    </button>
                                {/* </NavLink> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default HighestRatedGames;
