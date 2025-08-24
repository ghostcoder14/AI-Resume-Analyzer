"use client"
import { Upload } from "lucide-react";
import React, { useRef } from 'react'

function UploadButton() {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () =>{
        fileInputRef.current?.click();
    };

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file){
            console.log("Selected file:" ,file.name);
        }
    };

  return (
     <div>
      {/* Hidden Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
        id="resume-upload"
        title="Upload Resume"
      />

      {/* Visible Button */}
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg text-white"
      >
        <Upload className="w-5 h-5" />
        Upload Resume
      </button>
    </div>
  )
}

export default UploadButton
