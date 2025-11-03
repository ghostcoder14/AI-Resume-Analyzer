"use client";
import React, { useEffect, useState } from "react";

interface NavBarProps {
  onOpenSideDash: () => void;
  username?: string | null ;
}

const NavBarDashBoard: React.FC<NavBarProps> = ({ onOpenSideDash, username }) => {

  const [profileInitial, setProfileInitial] = useState("A");

  useEffect(()=> {
    if(username && username.trim().length > 0){
      setProfileInitial(username.charAt(0).toUpperCase());
    }else{
      setProfileInitial("A");
    }
  },[username])

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-black dark:text-white shadow-md z-40 flex items-center justify-between px-4 py-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={onOpenSideDash}
        className="px-5 py-2 rounded-xl bg-gray-100 text-black font-bold hover:shadow-lg transition-transform transform hover:scale-105"
      >
        ADD+
      </button>
      <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-inner">
        <p className="text-lg">{profileInitial}</p>
      </div>
    </div>
  );
};

export default NavBarDashBoard;