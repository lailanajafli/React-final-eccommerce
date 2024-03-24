// // Drawer.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // React Router'dan Link bileşenini içe aktarın
// import { FiHome, FiShoppingCart } from 'react-icons/fi'; // React Icons'dan simgeleri içe aktarın
// import './Drawer.css';

// function Drawer() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`drawer ${isOpen ? 'open' : ''}`}>
//       <button className="toggle-button" onClick={toggleDrawer}>
//         ☰
//       </button>
//       <div className="drawer-content">
//         <ul>
//           <li>
//             <Link to="/" className="drawer-link" onClick={toggleDrawer}>
//               <FiHome />
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/women" className="drawer-link" onClick={toggleDrawer}>
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link to="/men" className="drawer-link" onClick={toggleDrawer}>
//               Men
//             </Link>
//           </li>
//           <li>
//             <Link to="/accessories" className="drawer-link" onClick={toggleDrawer}>
//               Accessories
//             </Link>
//           </li>
//           <li>
//             <Link to="/electronics" className="drawer-link" onClick={toggleDrawer}>
//               Electronics
//             </Link>
//           </li>
//           <li>
//             <Link to="/shopping" className="drawer-link" onClick={toggleDrawer}>
//               <FiShoppingCart />
//               Shopping
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
//     </div>
//   );
// }

// export default Drawer;
