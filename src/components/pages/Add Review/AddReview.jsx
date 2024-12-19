import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthPRovider";

const AddReview = () => {
  const { user } = useContext(authContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    gameCover: "",
    gameTitle: "",
    reviewDescription: "",
    rating: "",
    publishingYear: new Date().getFullYear(),
    genre: "",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });

  const genres = ["Action", "RPG", "Adventure", "Simulation", "Puzzle"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (!formData.genre) {
      errors.genre = "Please select a genre.";
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newGames = {
      genre: formData.genre,
      gameCover: formData.gameCover,
      gameTitle: formData.gameTitle,
      reviewDescription: formData.reviewDescription,
      rating: formData.rating,
      publishingYear: formData.publishingYear,
      userName: formData.userName,
      userEmail: formData.userEmail,

    };

    // Send data to the server
    fetch("https://assignment-10-server-ten-kohl.vercel.app/games", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGames),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Game Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-10 mb-10">
      <div className="bg-blue-400 rounded-3xl px-6 py-10 max-w-lg mx-auto shadow-lg">
        <h2 className="text-black font-semibold text-center text-2xl mb-6">
          Add New Review
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
            {errors.genre && (
              <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
            )}
          </div>

          {/* User Info */}
          <div>
            <label className="block font-medium text-sm">User Email:</label>
            <input
              type="email"
              name="userEmail"
              readOnly
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-gray-100"
              value={formData.userEmail}
            />
          </div>
          <div>
            <label className="block font-medium text-sm">User Name:</label>
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
            className={`w-full mt-5 py-2 rounded-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            } text-white text-center`}
            disabled={loading}
          >
            {loading ? "Adding Review..." : "Submit Review"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddReview;

// //////////////////////////////

// import React, { useContext, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
// import { authContext } from "../../AuthProvider/AuthPRovider";

// const AddReview = () => {
//     const { user } = useContext(authContext);
//     const [errors, setErrors] = useState({});
//     const [formData, setFormData] = useState({
//         gameCover: '',
//         gameTitle: '',
//         reviewDescription: '',
//         rating: '',
//         publishingYear: new Date().getFullYear(),
//         genre: '',
//         userEmail: user?.email || '',
//         userName: user?.displayName || ''
//     });

//     const genres = ["Action", "RPG", "Adventure", "Simulation", "Puzzle"];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//         if (!formData.genre) {
//             errors.genre = "Please select a genre.";
//         }
//     };
//     const [loading, setLoading] = useState(true);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const form = e.target;

//         const gameCover = form.gameCover.value;
//         const gameTitle = form.gameTitle.value;
//         const reviewDescription = form.reviewDescription.value;
//         const rating = form.rating.value;
//         const publishingYear = form.publishingYear.value;
//         const genre = form.genre.value;

//         const newGames = { genre, gameCover, gameTitle, reviewDescription, rating, publishingYear };
//         console.log(newGames)

//         // send data to the server
//         fetch('https://assignment-10-server-ten-kohl.vercel.app', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newGames)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Game Added Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })
//     };

//     return (
//         <>
//             <div className="mt-10 mb-10 ">
//                 <div className="bg-blue-400 rounded-3xl" style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
//                     <h2 className="text-black font-semibold text-center text-2xl">Add New Review</h2>
//                     <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                         <label>
//                             <span className="font-medium">Game Cover Image URL :</span>
//                             <input
//                                 className="w-7/12 ml-1 p-1 mt-5 rounded-md"
//                                 type="url"
//                                 name="gameCover"
//                                 value={formData.gameCover}
//                                 onChange={handleChange}
//                                 placeholder=" Enter URL for the game cover"
//                                 required
//                             />
//                         </label>

//                         <label>
//                             <span className="font-medium">Game Title :</span>
//                             <input
//                                 className="w-7/12 ml-24 p-1 mt-2 rounded-md"
//                                 type="text"
//                                 name="gameTitle"
//                                 value={formData.gameTitle}
//                                 onChange={handleChange}
//                                 placeholder="  Enter game title"
//                                 required
//                             />
//                         </label>

//                         <label className="flex">
//                             <span className="font-medium">Review Description :</span>
//                             <textarea
//                                 className="w-7/12 ml-9 p-5 mt-2 rounded-md"
//                                 name="reviewDescription"
//                                 value={formData.reviewDescription}
//                                 onChange={handleChange}
//                                 placeholder="Write your review here"
//                                 required
//                             />
//                         </label>

//                         <div className="flex justify-between items-center mt-5">
//                             <label>
//                                 <span className="font-medium"> Rating (1-10) :</span>
//                                 <input
//                                     className="rounded-md ml-2 p-1"
//                                     type="number"
//                                     name="rating"
//                                     value={formData.rating}
//                                     onChange={handleChange}
//                                     min="1"
//                                     max="10"
//                                     required
//                                 />
//                             </label>
//                             <label>
//                                 <span className="font-medium">Publishing Year:</span>
//                                 <input
//                                     className="p-2 mt-1 rounded-md"
//                                     type="number"
//                                     name="publishingYear"
//                                     min="1970"
//                                     max={new Date().getFullYear()}
//                                     value={formData.publishingYear}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </label>
//                         </div>
//                         <label className=" flex justify-center items-center mt-3">
//                             <span className="font-medium">Genre :</span>
//                             <select className="rounded-md p-1 ml-5" name="genre" value={formData.genre} onChange={handleChange} required>
//                                 <option value="" disabled>
//                                     <span>Select a genre</span>
//                                 </option>
//                                 {genres.map((genre, index) => (
//                                     <option key={index} value={genre}>
//                                         {genre}
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
//                         </label>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-3">User Email</label>
//                             <input
//                                 type="email"
//                                 name="userEmail"
//                                 readOnly
//                                 className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm"
//                                 value={formData.userEmail}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-3">User Name</label>
//                             <input
//                                 type="text"
//                                 name="userName"
//                                 readOnly
//                                 className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm"
//                                 value={formData.userName}
//                             />
//                         </div>
//                         {/* {loading ? 'Adding Review...' : 'Add Review'} */}
//                         <button className="mt-5" type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
//                             Submit Review
//                         </button>
//                     </form>
//                     <ToastContainer />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddReview;
