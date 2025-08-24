"use client";
import { useState } from "react";

export default function SignInDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-4 py-2 transition-all duration-500 ease-in-out rounded-lg border border-gray-300 hover:border-black cursor-pointer"
      >
        Sign in
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 text-black flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-10">
          
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

           
            {isSignUp ? (
              <>
                <h2 className="text-xl text-black font-semibold mb-4">Sign Up</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 mb-3 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 mb-3 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border p-2 mb-3 rounded"
                />

                <button className="w-full px-3 py-2 bg-black text-white rounded">
                  Register
                </button>

                <div className="flex justify-center mt-3">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-700 cursor-pointer"
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl text-black font-semibold mb-4">Sign In</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 mb-3 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border p-2 mb-3 rounded"
                />

                <button className="w-full px-3 py-2 bg-black text-white rounded">
                  Login
                </button>

                <div className="flex justify-center mt-3">
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <span
                      onClick={() => setIsSignUp(true)}
                      className="text-blue-700 cursor-pointer"
                    >
                      Register
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
