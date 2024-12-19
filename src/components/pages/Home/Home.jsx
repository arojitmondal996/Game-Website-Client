// import image from "../../../assets/b1.jpg"
// import image2 from "../../../assets/b2.jpg"
// import image3 from "../../../assets/b3.jpg"
// import image4 from "../../../assets/banner1.jpg"
// import ExtraSection from "../../ExtraSection/ExtraSection";
// import { Typewriter, useTypewriter } from 'react-simple-typewriter'
// import { Tooltip } from 'react-tooltip';
// import Extra from "../../Extra/Extra";

// const Home = () => {
//     const [text] = useTypewriter({
//         words: ['Hello', 'From', 'GamePlay', 'World!'],
//         loop: 0
//       })
//     return (
//         <>
//             <div className="carousel h-[600px]">
//                 <div id="slide1" className="carousel-item relative w-full">
//                     <img
//                         src={image2}
//                         className="w-full overflow-visible" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative w-full">
//                     <img
//                         src={image3}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative w-full">
//                     <img
//                         src={image}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide4" className="carousel-item relative w-full">
//                     <img
//                         src={image4}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-10 mb-10">
//                 <h1 className="flex justify-center items-center font-bold text-4xl mt-10 mb-10"> <span>Highest Rated Game !◕‿‿◕</span><Typewriter /></h1>
//                 <a className="flex justify-center items-center mb-5" id="my-anchor-element">◕‿‿◕</a>
//                 <Tooltip
//                     anchorSelect="#my-anchor-element"
//                     content="Welcome To Game World ! Play The Game And Enjoy More ◕‿‿◕"
//                 />
//             </div>
//             <ExtraSection />
//             <Extra/>
//         </>
//     );
// };

// export default Home;

import image from "../../../assets/b1.jpg";
import image2 from "../../../assets/b2.jpg";
import image3 from "../../../assets/b3.jpg";
import image4 from "../../../assets/banner1.jpg";
import ExtraSection from "../../ExtraSection/ExtraSection";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";
import Extra from "../../Extra/Extra";
import { useEffect, useState } from "react";
import HighestRatedGames from "../../HighestRatedGames/HighestRatedGames";


const Home = () => {
  const [rating, setRating] = useState()
  const [text] = useTypewriter({
    words: ["Hello", "From", "GamePlay", "World"],
    loop: 0,
  });
  
  useEffect(()=> {
    fetch('http://localhost:5000/rating')
    .then(result => result.json())
    .then(data => {
      setRating(data)
    })
  }, [])
  return (
    <>
      {/* Responsive Carousel */}
      <div className="carousel h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❮
            </a>
            <a href="#slide2" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❮
            </a>
            <a href="#slide3" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❮
            </a>
            <a href="#slide4" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={image4}
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❮
            </a>
            <a href="#slide1" className="btn bg-black text-white btn-circle text-sm md:text-lg">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Text Section */}
      <div className="mt-10 mb-10 px-4">
        <h1 className="flex justify-center items-center font-bold text-2xl sm:text-3xl md:text-4xl mt-10 mb-10 text-center">
          <span>Highest Rated Game ! {text} </span>
          {/* <Typewriter words/> */}
        </h1>
        <a
          className="flex justify-center items-center mb-5"
          id="my-anchor-element"
        >
          ◕‿‿◕
        </a>
        <Tooltip
          anchorSelect="#my-anchor-element"
          content="Welcome To Game World! Play The Game And Enjoy More ◕‿‿◕"
        />
      </div>
      <HighestRatedGames/>
      <ExtraSection />
      <Extra />
    </>
  );
};

export default Home;
