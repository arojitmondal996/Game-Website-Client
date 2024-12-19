import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';

const AllReviews = () => {
    const games = useLoaderData(); // Loaded reviews from backend or API
    console.log(games)
    const [filteredGames, setFilteredGames] = useState([...games]); // State for filtered and sorted reviews
    const [selectedGenre, setSelectedGenre] = useState(""); // State for selected genre

    const genres = ["All", "Action", "RPG", "Adventure", "Simulation", "Puzzle"]; // Example genres

    // Handle Sorting
    const handleSort = (e) => {
        const sortBy = e.target.value;

        let sorted = [...filteredGames];
        if (sortBy === "ratingAsc") {
            sorted.sort((a, b) => a.rating - b.rating); // Sort by rating ascending
        } else if (sortBy === "ratingDesc") {
            sorted.sort((a, b) => b.rating - a.rating); // Sort by rating descending
        } else if (sortBy === "yearAsc") {
            sorted.sort((a, b) => a.publishingYear - b.publishingYear); // Sort by year ascending
        } else if (sortBy === "yearDesc") {
            sorted.sort((a, b) => b.publishingYear - a.publishingYear); // Sort by year descending
        }

        setFilteredGames(sorted); // Update the filtered reviews
    };

    // Handle Genre Filtering
    const handleFilter = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);

        if (genre === "All") {
            setFilteredGames([...games]); // Show all games if "All" is selected
        } else {
            const filtered = games.filter((game) => game.genre === genre);
            setFilteredGames(filtered);
        }
    };

    return (
        <>
            {/* Filter and Sort Panel */}
            <div className="flex flex-wrap justify-between items-center mt-5 mb-5 bg-blue-200 p-3 rounded-xl space-y-4 md:space-y-0">
                <div className="flex flex-wrap items-center space-x-4">
                    <h1 className="text-slate-950 font-medium text-sm md:text-base">
                        Filter by Genre
                    </h1>
                    <select
                        className="border border-gray-300 rounded p-2 text-sm md:text-base"
                        onChange={handleFilter}
                    >
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap items-center space-x-4">
                    <h1 className="text-slate-950 font-medium text-sm md:text-base">
                        Sort By
                    </h1>
                    <select
                        className="border border-gray-300 rounded p-2 text-sm md:text-base"
                        onChange={handleSort}
                    >
                        <option value="">Select</option>
                        <option value="ratingAsc">Rating: Low to High</option>
                        <option value="ratingDesc">Rating: High to Low</option>
                        <option value="yearAsc">Year: Old to New</option>
                        <option value="yearDesc">Year: New to Old</option>
                    </select>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 gap-x-5">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <AllReviewCard key={game._id} game={game}></AllReviewCard>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-sm md:text-base">
                        No games found for the selected genre.
                    </p>
                )}
            </div>
        </>
    );
};

export default AllReviews;
