import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUserCircle, FaHome } from 'react-icons/fa';
import { CgImport } from 'react-icons/cg';
import { MdPendingActions } from 'react-icons/md';
import { BiLogOut, BiHistory } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
// import { BsFilePost } from 'react-icons/bs';
// import { BsInfoCircle } from 'react-icons/bs';
// import { IoIosRocket } from 'react-icons/io';
// import { GiWorld } from 'react-icons/gi';
// import { GiWallet } from 'react-icons/gi';
// import { RiArticleLine } from 'react-icons/ri';
// import { BsQuestionCircleFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();
    const [brandData, setbrandData] = useState({});
    const getBrandData = async () => {
        try {
    
          const { data } = await axios.get("/brand/getBrandData");
          setbrandData(data.data);
        } catch (err) {
          console.log(err.response.status);
          if (err.response.status == 422) {
            navigate('/')
          }
        }
      };
    useEffect(() => {
        getBrandData();
      }, []);
    const menus = [
        { name: "Home", link: "/BrandHome?page=1", icon: FaHome,data:brandData },
        { name: "Pending Request", link: "/BrandPendingRequest", icon: MdPendingActions,data:brandData },
        { name: "Arrival Request", link: "/BrandArrivalRequest", icon: CgImport,data:brandData },
        { name: "Agreement", link: "/BrandConsignments", icon: FaHandshake,data:brandData },
        { name: "History", link: "/BrandHistory", icon: BiHistory,data:brandData },
        { name: "Profile", link: "/BrandProfile", icon: FaUserCircle,data:brandData },
        // { name: "Terms & Conditions", link: "/", icon: BsQuestionCircleFill },
        // { name: "About", link: "/", icon: BsInfoCircle },
    ];
    const logout = async () => {
        try {

            const res = await axios.get('/logout')
            console.log(res.data);
            if (res.data.success == true) {
                navigate('/');
            }
        } catch (err) {
            console.log(err);

        }

    }
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="flex fixed w-screen h-14">
                <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
                    <HiMenuAlt1
                        size={26}
                        className="cursor-pointer mx-auto"
                        onClick={() => setOpen(!open)}
                    />
                </div>

            </div>
            <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
                <div
                    className={`bg-gray-400 shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-16 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
                >
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                state={menu?.data}
                                key={i}
                                className={`${menu?.margin && "mt-5"} group flex items-center
                                cursor-pointer     text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                            >
                                <div >{React.createElement(menu?.icon, { size: "25" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 `}
                                >
                                </h2>
                                <h2
                                    className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                    <div
                        className={`group flex items-center
                    cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                    >
                        <div  ><BiLogOut size={25} className="my-10 mx-auto  hover:text-blue-700 cursor-pointer          " onClick={logout} /></div>
                        <h2
                            style={{
                                transitionDelay: `${13}00ms`,
                            }}
                            className={`whitespace-pre duration-500 `}
                        >
                        </h2>
                        <h2
                            className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            Logout
                        </h2>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;