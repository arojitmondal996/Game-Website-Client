import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthPRovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const {_id, rating, gameTitle, gameCover, reviewDescription, publishingYear, genre, userEmail, userName} = useLoaderData();
  const { manageProfile, setUser, user } = useContext(authContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gameCover: gameCover,
    gameTitle: gameTitle,
    reviewDescription: reviewDescription,
    rating: rating,
    publishingYear: publishingYear,
    genre: genre,
    userEmail: userEmail,
    userName: userName,
  });

  const genres = ["Action", "RPG", "Adventure", "Simulation", "Puzzle"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;

    const newGames = { gameCover, gameTitle, reviewDescription, rating, publishingYear };

    fetch(`https://assignment-10-server-ten-kohl.vercel.app/updateReview/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGames),
    })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Game Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/myProfile");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="mt-10 mb-10 px-4">
      <div className="bg-orange-300 rounded-3xl px-6 py-10 max-w-lg mx-auto shadow-lg">
        <h2 className="text-black font-semibold text-center text-2xl mb-6">
          Update Review
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Game Cover */}
          <div>
            <label className="block font-medium text-sm">
              Game Cover Image URL:
            </label>
            <input
              className="w-full mt-1 p-2 rounded-md border border-gray-300"
              type="url"
              name="gameCover"
              value={formData.gameCover}
              onChange={handleChange}
              placeholder="Enter URL for the game cover"
              required
            />
          </div>

          {/* Game Title */}
          <div>
            <label className="block font-medium text-sm">Game Title:</label>
            <input
              className="w-full mt-1 p-2 rounded-md border border-gray-300"
              type="text"
              name="gameTitle"
              value={formData.gameTitle}
              onChange={handleChange}
              placeholder="Enter game title"
              required
            />
          </div>

          {/* Review Description */}
          <div>
            <label className="block font-medium text-sm">
              Review Description:
            </label>
            <textarea
              className="w-full mt-1 p-2 rounded-md border border-gray-300"
              name="reviewDescription"
              value={formData.reviewDescription}
              onChange={handleChange}
              placeholder="Write your review here"
              required
            />
          </div>

          {/* Rating & Publishing Year */}
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <div className="w-full sm:w-1/2">
              <label className="block font-medium text-sm">Rating (1-10):</label>
              <input
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="10"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block font-medium text-sm">
                Publishing Year:
              </label>
              <input
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
                type="number"
                name="publishingYear"
                min="1970"
                max={new Date().getFullYear()}
                value={formData.publishingYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Genre */}
          <div>
            <label className="block font-medium text-sm">Genre:</label>
            <select
              className="w-full mt-1 p-2 rounded-md border border-gray-300"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a genre
              </option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* User Info */}
          <div>
            <label className="block text-sm font-medium">User Email:</label>
            <input
              type="email"
              name="userEmail"
              readOnly
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-gray-100"
              value={formData.userEmail}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">User Name:</label>
            <input
              type="text"
              name="userName"
              readOnly
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-gray-100"
              value={formData.userName}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-center"
          >
            Submit Review
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateReview;
