import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../components/Error/Error";
import Home from "../components/pages/Home/Home";
import AllReviews from "../components/pages/All Reviews/AllReviews";
import AddReview from "../components/pages/Add Review/AddReview";
import MyReviews from "../components/pages/My Reviews/MyReviews";
import GameWatchList from "../components/pages/Game WatchList/GameWatchlist";
import Register from "../components/Register/Register";
import SignIn from "../components/Login/SignIn";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import MyProfile from "../components/MyProfile/MyProfile";
import ReviewCard from "../components/pages/ReviewCard/ReviewCard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/allReviews",
                element: <AllReviews />,
                loader: () => fetch('https://assignment-10-server-ten-kohl.vercel.app/games')
            },
            {
                path: "/addReview",
                element: <PrivateRoute>
                    <AddReview />
                </PrivateRoute>,
            },
            {
                path: "/myReviews",
                element: <PrivateRoute>
                    <MyReviews />
                </PrivateRoute>,
            },
            {
                path: "/gameWatchList",
                element: <PrivateRoute>
                    <GameWatchList />
                </PrivateRoute>,
            },
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/reviewDetails/:id",
                element: <ReviewDetails />,
                loader: ({ params }) => fetch(`https://assignment-10-server-ten-kohl.vercel.app/games/${params.id}`)
            },
            {
                path: "/updateReview/:id",
                element: <UpdateReview />,
                loader: ({ params }) => fetch(`https://assignment-10-server-ten-kohl.vercel.app/games/${params.id}`),
            },
            {
                path: "/myProfile",
                element: <MyProfile />
            },
            {
                path: "/reviewCard",
                element: <ReviewCard />,
            }
        ]
    }
]);

export default router;