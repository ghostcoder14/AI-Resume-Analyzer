"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  setIsSignUp: (isSignUp: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SignUpForm({ setIsSignUp, setIsOpen }: SignUpFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage(null); 
    setIsLoading(true); 

    try {
      const response = await axios.post(`${BASE_URL}/api/register`, formData); 
      console.log("Registration successful!", response.data);
      setIsSignUp(false); 
      alert('Registration successful! Please sign in.');
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
          const message = (axiosError.response.data as { message?: string })?.message || 'Registration failed. Try a different email.';
          setErrorMessage(message);
        } else if (axiosError.request) {
          setErrorMessage("No response from server. Check your connection.");
        }
      } else {
        setErrorMessage("An unknown error occurred during registration.");
      }
      console.error("Registration error:", error);

    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2 className="text-xl text-black font-semibold mb-4">Sign Up</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      
      
      {errorMessage && (
        <p className="text-red-600 text-sm mb-3">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-3 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Registering..." : "Register"}
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
    </form>
  );
}