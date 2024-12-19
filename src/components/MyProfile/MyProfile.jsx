import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthPRovider';

const MyProfile = () => {
    const { user } = useContext(authContext);

    return (
        <div className="flex justify-center items-center py-8 px-4">
            <form className="bg-black w-full sm:w-[500px] md:w-[600px] mt-8 mb-20 text-center p-8 sm:p-10 rounded-3xl">
                <p className="text-4xl sm:text-5xl text-white font-bold mt-8">{user?.displayName}</p>
                <div className="flex justify-center">
                    <img 
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mt-10 mb-10" 
                        src={user?.photoURL} 
                        alt="User Profile" 
                    />
                </div>
                <p className="text-xl sm:text-2xl text-white font-medium">Welcome to My Profile</p>
                <NavLink 
                    to="/" 
                    type="submit" 
                    className="btn mt-8 bg-[#0056b3] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Update Now
                </NavLink>
            </form>
        </div>
    );
};

export default MyProfile;


// //////////////////

// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { authContext } from '../AuthProvider/AuthPRovider';

// const MyProfile = () => {
//     const { user } = useContext(authContext)

//     return (
//         <div className='flex justify-center items-center '>
//             <form className='bg-black w-[600px] mt-8 mb-20 text-center p-10 rounded-3xl'>
//                 <p className='text-5xl text-white font-bold mt-8'>{user?.displayName}</p>
//                 <div className='flex justify-center'>
//                     <img className='w-40 h-40 rounded-full justify-center items-center mt-10 mb-10' src={user?.photoURL} alt="" />
//                 </div>
//                 <p className='text-2xl text-white font-medium'>Welcome to My Profile</p>
//                 <NavLink to="/updateReview" type="submit" className="btn mt-8 bg-[#0056b3] text-white">Update Now</NavLink>
//             </form>
//         </div>
//     );
// };

// export default MyProfile;