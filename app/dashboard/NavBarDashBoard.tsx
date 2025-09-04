"use client";
import React from "react";

interface NavBarProps {
  onOpenSideDash: () => void;
}

const NavBarDashBoard: React.FC<NavBarProps> = ({ onOpenSideDash }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-black dark:text-white shadow-md z-40 flex items-center justify-between px-6 py-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={onOpenSideDash}
        className="px-5 py-2 rounded-xl bg-gray-100 text-black font-bold hover:shadow-lg transition-transform transform hover:scale-105"
      >
        ADD+
      </button>
    </div>
  );
};

export default NavBarDashBoard;