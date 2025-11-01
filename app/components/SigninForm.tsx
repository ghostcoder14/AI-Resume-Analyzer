// SignInForm.js

import { useState } from "react";

// The component accepts props to toggle states managed in the parent (SignInDialog)
export default function SignInForm({ setIsSignUp, setIsOpen }) {
  // Local state to manage form input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    console.log("Signing In with:", formData);
    // ⚠️ TODO: Implement the fetch/Axios call to your backend /api/login endpoint
    try {
      // Example implementation:
      /*
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Close the dialog on successful sign-in
        setIsOpen(false); 
      } else {
        // Handle login failure
        alert('Login failed!');
      }
      */
    } catch (error) {
      console.error("Login error:", error);
    }
    // For demonstration, just close the dialog after logging the data
    // setIsOpen(false); 
  };

  return (
    <>
      <h2 className="text-xl text-black font-semibold mb-4">Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />

      {/* Attach submission handler to button or a wrapping <form> element */}
      <button
        onClick={handleSignIn}
        className="w-full px-3 py-2 bg-black text-white rounded"
      >
        Login
      </button>

      <div className="flex justify-center mt-3">
        <p className="text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            // Use the prop function to toggle to the Sign Up form
            onClick={() => setIsSignUp(true)}
            className="text-blue-700 cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </>
  );
}