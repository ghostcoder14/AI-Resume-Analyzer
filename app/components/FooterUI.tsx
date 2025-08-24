"use client"
import React from 'react'
import { Brain, Twitter, Github, Linkedin } from "lucide-react"




function FooterUi() {
  return (
    <footer className="bg-slate-50 text-black py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Brand */}
        <h2 className="text-<xl font-bold"> <Brain/>AI Resume Analyzer</h2>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white" title="GitHub"><Github size={20} /></a>
          <a href="#" className="hover:text-white" title="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white" title="Twitter"><Twitter size={20} /></a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}

export default FooterUi
