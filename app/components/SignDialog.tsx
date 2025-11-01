// SignInDialog.js

"use client";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function SignInDialog() {
  const [isOpen, setIsOpen] = useState(false);
  // State to switch between Sign In (false) and Sign Up (true)
  const [isSignUp, setIsSignUp] = useState(false); 

  return (
    <>
      {/* 1. Trigger Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-4 py-2 transition-all duration-500 ease-in-out rounded-lg border border-gray-300 hover:border-black cursor-pointer"
      >
        Sign in
      </div>

      {/* 2. Modal/Dialog Container */}
      {isOpen && (
        <div className="fixed inset-0 text-black flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-10">
          
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            {/* Conditional Rendering of Forms */}
            {isSignUp ? (
              <SignUpForm setIsSignUp={setIsSignUp} setIsOpen={setIsOpen} />
            ) : (
              <SignInForm setIsSignUp={setIsSignUp} setIsOpen={setIsOpen} />
            )}
          </div>
        </div>
      )}
    </>
  );
}