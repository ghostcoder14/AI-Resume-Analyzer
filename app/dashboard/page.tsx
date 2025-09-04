"use client";
import React, { useState } from "react";
import JobsCardComponents from "../components/JobsCardComponents";
import { SideDash } from "./SideDash";
import NavBarDashBoard from "./NavBarDashBoard";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  appliedDate: string;
  status: string;
  description: string;
}



export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isSideDashOpen, setIsSideDashOpen] = useState(false);
  const [editingJob , setEditingJob] = useState<Job | null>(null)

  const addJob = (job: Omit<Job, "id">) => {
    setJobs((prev) => [...prev, { ...job, id: prev.length + 1 }]);
  };

  const DeleteHandler = (id:number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id))
  }
  
  const editHandler = (id: number) => {
    const jobToEdit = jobs.find((job) => job.id === id );
    if(jobToEdit){
      setEditingJob(jobToEdit);
      setIsSideDashOpen(true);
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-200">
      
      <NavBarDashBoard onOpenSideDash={() => setIsSideDashOpen(true)} />

      <main 
        className={`pt-28 px-6 transition-all duration-300 ${
          isSideDashOpen ? "blur-sm scale-95 pointer-events-none" : ""
        }`}
      >
        <div className="p-2 bg-black mb-2">
          <p className="font-bold font-serif">Resume Scores:</p>

        </div>
        <div className="bg-white text-black p-4 rounded-lg shadow-md flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search jobs..."
            className="p-2 border rounded flex-1 min-w-[200px]"
          />
          <select title="Progress" className="p-2 border text-black rounded">
            <option value="">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length ? (
            jobs.map((job) => (
              <JobsCardComponents
               key={job.id}
               job={job} 
               onDelete={DeleteHandler} 
               onEdit={editHandler} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-12">
              No jobs added yet. Click the ADD+ button to get started!
            </p>
          )}
        </div>
      </main>

      
      {isSideDashOpen && (
        <SideDash
          closeSideBar={() => {
            setIsSideDashOpen(false)
            setEditingJob(null)
          }}

          onSaveJob={(job) => {
            if(editingJob){
              setJobs((prev) => prev.map((j) => (j.id  === editingJob.id ? {...job, id: j.id}:j))) ;
              setEditingJob(null);
            }else{
              addJob(job)
            }
          }}
          jobToEdit = {editingJob}
        />
      )}
    </div>
  );
}