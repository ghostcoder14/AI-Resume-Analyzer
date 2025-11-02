"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";

interface FormData {
  email: string;
  password: string;
}

interface SignInFormProps {
  setIsSignUp: (isSignUp: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SignInForm({ setIsSignUp, setIsOpen }: SignInFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage(null);
    setIsLoading(true);

    try {     
      const response = await axios.post(`${BASE_URL}/api/login`, formData); 
      console.log("Login successful!", response.data);
      setIsOpen(false); 
      setFormData({ email: '', password: '' }); 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const message = (axiosError.response.data as { message?: string })?.message || 'Login failed. Please check your credentials.';
          setErrorMessage(message);
        } else if (axiosError.request) {
          setErrorMessage("No response from server. Please try again later.");
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      } else {
        setErrorMessage("An unknown error occurred.");
      }
      console.error("Login error:", error);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2 className="text-xl text-black font-semibold mb-4">Sign In</h2>
      
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
        {isLoading ? "Logging in..." : "Login"}
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
    </form>
  );
}