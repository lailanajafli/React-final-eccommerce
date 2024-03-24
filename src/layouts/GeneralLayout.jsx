// GeneralLayout.jsx

// import Navbar2 from "../components/navbar/Navbar2";

// export default function GeneralLayout({children}){
//     return (
//         <div>
//                   <Navbar2 />
//                   {children}
//         </div>
//     )

// }
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from "../components/navbar/Navbar";
// import Navbar2 from "../components/navbar/Navbar2";

// export default function GeneralLayout({ children }) {
//   const location = useLocation();

//   // Eğer route "/shopping" ise Navbar2, diğer durumlarda Navbar kullanılacak
//   const isShoppingRoute = location.pathname === "/shopping";

//   return (
//     <div>
//       {isShoppingRoute ? <Navbar2 /> : <Navbar />}
//       {children}
//     </div>
//   );
// }

//axirda bura footer verersen