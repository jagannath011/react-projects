// import { FaBars } from "react-icons/fa";
// import { useState } from "react";


// function Nav() {
//     let [data, setData] = useState(false)




//     return (
//         <>
//             <div className="w-full h-16 bg-black text-white border-black flex items-center justify-between">
//                 <p className="  text-xl  ml-6">JM</p>
//                 <button className="text-xl mr-6 block  md:hidden" onClick={() => { setData(!data) }}><FaBars />
//                 </button>

//                 <ul className="hidden md:flex w-1/2 h-full  items-center justify-around" name="navtags">
//                     <li><a>home</a></li>
//                     <li><a>hobbies</a></li>
//                     <li><a>skills</a></li>
//                     <li><a>education</a></li>
//                     <li><a>experience</a></li>
//                     <li><a>contact</a></li>
//                 </ul>


//             </div>

//             {
//                 data && (<ul className="hidden md:block w-1/2 h-full  md:flex items-center justify-around" name="navtags">
//                     <li><a>home</a></li>
//                     <li><a>hobbies</a></li>
//                     <li><a>skills</a></li>
//                     <li><a>education</a></li>
//                     <li><a>experience</a></li>
//                     <li><a>contact</a></li>
//                 </ul>)
//             }

//         </>
//     )
// }

// export default Nav
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-black text-white border-black flex items-center justify-between">
        <p className="text-xl ml-6">JM</p>

        {/* Hamburger icon for mobile */}
        <button
          className="text-xl mr-6 block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop nav (visible only on md and above) */}
        <ul className="hidden md:flex w-1/2 pointer h-full items-center justify-around">
          <li><a className="hover:underline  hover:border-orange-400">home</a></li>
          <li><a>hobbies</a></li>
          <li><a to="/skills">skills</a></li>
          <li><a>education</a></li>
          <li><a>experience</a></li>
          <li><a>contact</a></li>
        </ul>
      </div>

      {/* Mobile nav (visible only if isOpen is true) */}
      {isOpen && (
        <ul className="flex flex-col justify-center  items-end bg-black pr-8 text-white py-4 md:hidden">
          <li className="py-1 hover:text-green-500 cursor-pointer"><a>home</a></li>
          <li className="py-1"><a>hobbies</a></li>
          <li className="py-1"><a>skills</a></li>
          <li className="py-1"><a>education</a></li>
          <li className="py-1"><a>experience</a></li>
          <li className="py-1"><a>contact</a></li>
        </ul>
      )}
    </>
  );
}

export default Nav;
