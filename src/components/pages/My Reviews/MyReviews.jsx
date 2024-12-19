import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthPRovider";
import Swal from "sweetalert2";

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-10-server-ten-kohl.vercel.app/myReviews?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setGames(data))
                .catch((err) => console.error("Error fetching games:", err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-ten-kohl.vercel.app/games/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your game has been deleted.", "success");
                            setGames(games.filter((game) => game._id !== id));
                        }
                    })
                    .catch((err) => console.error("Error deleting games:", err));
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/games/${id}`);
    };

    return (
        <div className="mt-10 mb-10 px-4">
            <h2 className="text-3xl text-center font-bold mb-7">My Games</h2>
            <div className="container mx-auto overflow-x-auto">
                <table className="min-w-full bg-black text-white rounded-xl text-center">
                    <thead>
                        <tr>
                            <th className="lg:py-8 lg:px-4 border-b">Game Title</th>
                            <th className="lg:py-8 lg:px-4 border-b">Rating</th>
                            <th className="lg:py-8 lg:px-4 border-b">Publishing Year</th>
                            <th className="lg:py-8 lg:px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            <tr key={game._id}>
                                <td className="lg:py-2 lg:px-4 border-b">{game.gameTitle}</td>
                                <td className="lg:py-2 lg:px-4 border-b">{game.rating}</td>
                                <td className="lg:py-2 lg:px-4 border-b">{game.publishingYear}</td>
                                <td className="lg:py-2 lg:px-4 border-b flex justify-center items-center space-x-2">
                                    <NavLink to={`/updateReview/${game._id}`}>
                                        <button
                                            className="btn bg-black text-blue-500"
                                            onClick={() => handleUpdate(game._id)}
                                        >
                                            Update
                                        </button>
                                    </NavLink>
                                    <button
                                        className="btn bg-black text-red-500"
                                        onClick={() => handleDelete(game._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {games.length === 0 && (
                    <p className="text-center mt-5">No games found.</p>
                )}
            </div>
        </div>
    );
};

export default MyReviews;



// /////////////////////////////////////////////////////////////

// import React, { useContext, useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { authContext } from "../../AuthProvider/AuthPRovider";
// import Swal from "sweetalert2";

// const MyReviews = () => {
//     const { user } = useContext(authContext);
//     const [games, setGames] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://assignment-10-server-ten-kohl.vercel.app?email=${user.email}`)
//                 .then((res) => res.json())
//                 .then((data) => setGames(data))
//                 .catch((err) => console.error("Error fetching games:", err));
//         }
//     }, [user]);

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "This action cannot be undone!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`https://assignment-10-server-ten-kohl.vercel.app/${id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire("Deleted!", "Your games has been deleted.", "success");
//                             setGames(games.filter((games) => games._id !== id));
//                         }
//                     })
//                     .catch((err) => console.error("Error deleting games:", err));
//             }
//         });
//     };

//     const handleUpdate = (id) => {
//         navigate(`/games/${id}`);
//     };

//     return (
//         <div className="mt-10 mb-10">
//             <h2 className="text-3xl text-center font-bold mb-7">My games</h2>
//             <div className="container mx-auto">
//                 <table className="min-w-full bg-black text-white rounded-xl text-center">
//                     <thead>
//                         <tr>
//                             <th className="py-8 px-4 border-b">Game Title</th>
//                             <th className="py-8 px-4 border-b">Rating</th>
//                             <th className="py-8 px-4 border-b">Publishing Year</th>
//                             <th className="py-8 px-4 border-b">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {games.map((games) => (
//                             <tr key={games._id}>
//                                 <td className="py-2 px-4 border-b">{games.gameTitle}</td>
//                                 <td className="py-2 px-4 border-b">{games.rating}</td>
//                                 <td className="py-2 px-4 border-b">{games.publishingYear}</td>
//                                 <td className="py-2 px-4 border-b flex justify-center items-center space-x-2">
//                                     <NavLink to="/updateReview">
//                                         <button
//                                             className="btn bg-black text-blue-500"
//                                             onClick={() => handleUpdate(games._id)}
//                                         >
//                                             Update
//                                         </button>
//                                     </NavLink>
//                                     <button
//                                         className="btn bg-black text-red-500"
//                                         onClick={() => handleDelete(games._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 {games.length === 0 && (
//                     <p className="text-center mt-5">No games found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyReviews;

