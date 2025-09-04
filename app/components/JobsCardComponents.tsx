"use client";
import React, { useState } from 'react';
import { Ellipsis } from 'lucide-react';


interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  appliedDate: string;
  status: string;
  description: string;
}

interface JobsCardProps {
  job: Job;
  onDelete: (id: number) =>  void ;
  onEdit: (id: number) => void ;
}



const JobsCardComponents: React.FC<JobsCardProps> = ({ job , onDelete, onEdit }) => {

  const[menu, setMenu] = useState(false);


  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200'>
      <Ellipsis onClick={()=>setMenu((prev) => !prev)} className='text-black right-1 left-1 '/>
         
         {menu && (
          <div>
            <div className='bg-gray-300 gap-0.5 p-1 text-black font-bold size-1/4 flex flex-col'>
              <button onClick={() => onEdit(job.id)} className='  bg-amber-50'>Edit</button>
              <button onClick={() => onDelete(job.id)} className=' bg-amber-50'>Delete</button>
            </div>
          </div>
         )}

      {/* Header with title and date */}
      <div className='flex justify-between items-start mb-3 gap-2'>
        
        <h2 className='text-lg font-bold text-gray-900 flex-1 line-clamp-2'>
          {job.title}
        </h2>
        <span className='text-sm text-teal-600 font-medium whitespace-nowrap'>
          {job.appliedDate}
        </span>
      </div>

      {/* Company and location */}
      <div className="space-y-1 mb-3">
        <p className="text-base font-semibold text-gray-800">{job.company}</p>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-1">📍</span>
          {job.location}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-1">💰</span>
          {job.salary}
        </p>
      </div>

      {/* Description */}
      {job.description && (
        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
          {job.description}
        </p>
      )}

      {/* Status badge */}
      <div className="flex justify-end">
        <span
          className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
            job.status.includes("Applied")
              ? "bg-green-100 text-green-800"
              : job.status.includes("Interview")
              ? "bg-yellow-100 text-yellow-800"
              : job.status.includes("Offer")
              ? "bg-blue-100 text-blue-800"
              : job.status.includes("Rejected")
              ? "bg-red-100 text-red-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {job.status}
        </span>
      </div>
    </div>
  );
};

export default JobsCardComponents;