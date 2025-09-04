"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Job } from "./page";

interface SideDashProps {
  closeSideBar: () => void;
  onSaveJob: (job: Omit<Job, "id">) => void;
  jobToEdit : Job | null ;
}



export const SideDash: React.FC<SideDashProps> = ({ closeSideBar, onSaveJob, jobToEdit }) => {
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const [description, setDescription] = useState("");

  const options = [
    { label: "Applied", color: "bg-green-100 text-green-800", emoji: "🟢" },
    { label: "Interview", color: "bg-yellow-100 text-yellow-800", emoji: "🟡" },
    { label: "Offer", color: "bg-blue-100 text-blue-800", emoji: "🔵" },
    { label: "Rejected", color: "bg-red-100 text-red-800", emoji: "🔴" },
    { label: "Ongoing", color: "bg-purple-100 text-purple-800", emoji: "🟤" },
  ];

  const handleSave = () => {
    // Basic validation
    if (!title || !company || !location || !salary || !appliedDate || !status) {
      alert("Please fill in all required fields");
      return;
    }

    onSaveJob({
      title,
      company,
      location,
      salary,
      appliedDate,
      status,
      description,
    });

    
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    setAppliedDate("");
    setStatus("");
    setDescription("");
    closeSideBar();
  };

  useEffect(() => {
  if(jobToEdit){
     setTitle(jobToEdit.title);
    setCompany(jobToEdit.company);
    setLocation(jobToEdit.location);
    setSalary(jobToEdit.salary);
    setAppliedDate(jobToEdit.appliedDate);
    setStatus(jobToEdit.status);
    setDescription(jobToEdit.description);
  }else{
     setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    setAppliedDate("");
    setStatus("");
    setDescription("");
  }
}, [jobToEdit]) 

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 right-0 z-50 w-full sm:w-96 md:w-1/3 max-w-md h-[calc(100vh-5rem)] p-6 bg-white shadow-2xl flex flex-col overflow-auto font-bold text-black border-l"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold"> {jobToEdit ? "Edit Job Application" : "Add New Job Application"} </h2>
        <button
          onClick={closeSideBar}
          className="text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-semibold mb-1">Job Title*</label>
          <input
            type="text"
            placeholder="Software Engineer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Company*</label>
          <input
            type="text"
            placeholder="e.g Google"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Location*</label>
          <input
            type="text"
            placeholder="e.g Bangalore"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Salary Range*</label>
          <input
            type="text"
            placeholder="10LPA"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Applied Date*</label>
          <input
          title="date"
            type="date"
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Status*</label>
          <div className="relative">
            <input
              readOnly
              value={status}
              placeholder="Select Job Status"
              onClick={() => setOpen(!open)}
              className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {open && (
              <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-auto z-60">
                {options.map((opt) => (
                  <li
                    key={opt.label}
                    onClick={() => {
                      setStatus(`${opt.emoji} ${opt.label}`);
                      setOpen(false);
                    }}
                    className="p-3 cursor-pointer flex items-center gap-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {opt.emoji} {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Job Description</label>
          <textarea
            placeholder="Brief Description or key requirements"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-t">
        <button
          onClick={closeSideBar}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </div>
    </motion.div>
  );
};