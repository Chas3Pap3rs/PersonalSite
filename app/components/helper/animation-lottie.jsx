// "use client";

// import { useState, useEffect } from "react";
// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//     const [animationData, setAnimationData] = useState(null);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//           setAnimationData(animationPath);
//         }
//       }, [animationPath]);

//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData,
//         style: {
//             width: width || '100%',
//         }
//     };

//     return animationData ? <Lottie {...defaultOptions} /> : null;
// };

// export default AnimationLottie;