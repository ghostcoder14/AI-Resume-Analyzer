"use client";
import React, { useEffect, useState, useRef } from "react";

interface NavBarProps {
  onOpenSideDash: () => void;
  username?: string | null;
  email?: string | null;
}

const NavBarDashBoard: React.FC<NavBarProps> = ({ onOpenSideDash, username, email }) => {
  const [profileInitial, setProfileInitial] = useState("A");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (username && username.trim().length > 0) {
      setProfileInitial(username.charAt(0).toUpperCase());
    } else {
      setProfileInitial("A");
    }
  }, [username]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-black dark:text-white shadow-md z-40 flex items-center justify-between px-4 py-4">
      <h1 className="text-xl font-bold">Dashboard</h1>

      <button
        onClick={onOpenSideDash}
        className="px-5 py-2 rounded-xl bg-gray-100 text-black font-bold hover:shadow-lg transition-transform transform hover:scale-105"
      >
        ADD+
      </button>

      <div className="relative" ref={dropdownRef}>
        {/* Profile Circle */}
        <div
          onClick={() => setOpenDropdown((prev) => !prev)}
          className="bg-gray-200 dark:bg-gray-800 cursor-pointer text-black dark:text-white font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-inner"
        >
          <p className="text-lg">{profileInitial}</p>
        </div>

        {/* Dropdown */}
        {openDropdown && (
          <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 p-3">
            <div className="px-2 py-2 border-b border-gray-200 dark:border-gray-700">
              <p className="font-semibold">{username || "Guest User"}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {email || "guest@example.com"}
              </p>
            </div>

            <button
              onClick={() => alert("Change Password clicked")}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Change Password
            </button>

            <button
              onClick={() => alert("Logout clicked")}
              className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarDashBoard; 