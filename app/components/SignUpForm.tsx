// SignUpForm.js

import { useState } from "react";

// The component accepts props to toggle states managed in the parent (SignInDialog)
export default function SignUpForm({ setIsSignUp, setIsOpen }) {
  // Local state to manage form input data
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSignUp = async () => {
    console.log("Registering with:", formData);
    // ⚠️ TODO: Implement the fetch/Axios call to your backend /api/register endpoint
    try {
        // Example implementation:
        /*
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // You might close the dialog, or switch to the Sign In view
          setIsSignUp(false);
          alert('Registration successful! Please sign in.');
        } else {
          // Handle registration failure
          alert('Registration failed!');
        }
        */
      } catch (error) {
        console.error("Registration error:", error);
      }
    // For demonstration, just switch to the sign-in view
    // setIsSignUp(false); 
  };

  return (
    <>
      <h2 className="text-xl text-black font-semibold mb-4">Sign Up</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
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
        onClick={handleSignUp}
        className="w-full px-3 py-2 bg-black text-white rounded"
      >
        Register
      </button>

      <div className="flex justify-center mt-3">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <span
            // Use the prop function to toggle to the Sign In form
            onClick={() => setIsSignUp(false)}
            className="text-blue-700 cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </>
  );
}