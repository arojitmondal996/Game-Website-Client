import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthPRovider';

const GameWatchlist = () => {
    const {user} = useContext(authContext);
    const [watchlist, setwatchList] = useState([])
    useEffect(() => {
        if(user?.email){
            fetch(`https://assignment-10-server-ten-kohl.vercel.app/wishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setwatchList(data)
            })
        }
    }, [user])
    return (
        // <div>
        //     {/* <h1>I am wishlist</h1> */}
        //     {
        //         watchlist.map((watch) => <div> <h1>Hi</h1> </div> )
        //     }
        // </div>
        <div className="mt-10 mb-10 px-4">
            <h2 className="text-3xl text-center font-bold mb-7">My Games</h2>
            <div className="container mx-auto overflow-x-auto">
                <table className="min-w-full bg-black text-white rounded-xl text-center">
                    <thead>
                        <tr>
                            <th className="lg:py-8 lg:px-4 border-b">Game Title</th>
                            <th className="lg:py-8 lg:px-4 border-b">Rating</th>
                            <th className="lg:py-8 lg:px-4 border-b">Publishing Year</th>
                            <th className="lg:py-8 lg:px-4 border-b">Genera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((watch) => (
                            <tr key={watch._id}>
                                <td className="lg:py-2 lg:px-4 border-b">{watch.gameTitle}</td>
                                <td className="lg:py-2 lg:px-4 border-b">{watch.rating}</td>
                                <td className="lg:py-2 lg:px-4 border-b">{watch.publishingYear}</td>
                                <td className="lg:py-2 lg:px-4 border-b">{watch.genre}</td>
                                {/* <td className="lg:py-2 lg:px-4 border-b flex justify-center items-center space-x-2">
                                    <NavLink to="/">
                                        <button
                                            className="btn bg-black text-blue-500"
                                            onClick={() => handleUpdate(watch._id)}
                                        >
                                            Update
                                        </button>
                                    </NavLink>
                                    <button
                                        className="btn bg-black text-red-500"
                                        onClick={() => handleDelete(watch._id)}
                                    >
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {watchlist.length === 0 && (
                    <p className="text-center mt-5">No games found.</p>
                )}
            </div>
        </div>
    );
};

export default GameWatchlist;




























// import React, { useContext, useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
// import { authContext } from "../../AuthProvider/AuthPRovider";

// const GameWatchlist = ({}) => {
//     const { user } = useContext(authContext); // Access the logged-in user's information
//     const [watchlist, setWatchlist] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch user's watchlist
//     useEffect(() => {
//         if (user) {
//             fetch(`https://assignment-10-server-ten-kohl.vercel.app/watchlist?email=${user.email}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     setWatchlist(data);
//                     setLoading(false);
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                     toast.error("Failed to fetch watchlist data.");
//                 });
//         }
//     }, [user]);

//     // Delete a game from the watchlist
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "This game will be removed from your watchlist.",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//             cancelButtonText: "Cancel",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`https://assignment-10-server-ten-kohl.vercel.app/watchlist/${id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire("Deleted!", "The game has been removed.", "success");
//                             setWatchlist((prev) => prev.filter((game) => game._id !== id));
//                         } else {
//                             toast.error("Failed to delete the game.");
//                         }
//                     });
//             }
//         });
//     };

//     if (loading) {
//         return <div>Loading watchlist...</div>;
//     }

//     if (watchlist.length === 0) {
//         return <div className="text-center mt-10">Your watchlist is empty.</div>;
//     }

//     return (
//         <div className="mt-10 mb-10 max-w-5xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-6">My Watchlist</h2>
//             <div className="overflow-x-auto">
//                 <table className="table-auto w-full border-collapse border border-gray-200">
//                     <thead>
//                         <tr className="bg-blue-200 text-left">
//                             <th className="p-3 border border-gray-300">Game Cover</th>
//                             <th className="p-3 border border-gray-300">Game Title</th>
//                             <th className="p-3 border border-gray-300">Genre</th>
//                             <th className="p-3 border border-gray-300">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {watchlist.map((game) => (
//                             <tr key={game._id} className="hover:bg-gray-100">
//                                 <td className="p-3 border border-gray-300">
//                                     <img
//                                         src={game.gameCover}
//                                         alt={game.gameTitle}
//                                         className="w-16 h-16 object-cover rounded"
//                                     />
//                                 </td>
//                                 <td className="p-3 border border-gray-300">{game.gameTitle}</td>
//                                 <td className="p-3 border border-gray-300">{game.genre}</td>
//                                 <td className="p-3 border border-gray-300">
//                                     <button
//                                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                                         onClick={() => handleDelete(game._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default GameWatchlist;
