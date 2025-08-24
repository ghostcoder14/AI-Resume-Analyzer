"use client"
import Image from "next/image";
import { GridBackgroundDemo } from "../components/ui/grid-background";
import { Brain, FileText, MessageSquare, Zap } from "lucide-react";
import { FileUpload } from "../components/ui/file-upload";

export default function Home() {
  return (
    <GridBackgroundDemo>
      <div className="text-center flex flex-col items-center justify-center gap-4 px-4">
        <Zap className="w-8 h-8 text-primary mb-2 animate-pulse" />
        <span className="text-base font-medium text-white/90 flex flex-row gap-2">
        <Zap/>  AI-Powered Resume Analyzer
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Optimize Your Resume for{" "}
          <span className="block text-gradient">Maximum Impact</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Upload your resume and get instant ATS scoring, professional corrections,
          and AI-powered optimization suggestions to land your dream job.
        </p>

        <div className="grid md:grid-cols-3 gap-10 w-full max-w-5xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-shine rounded-full flex items-center justify-center mx-auto mb-4 shimmer">
            <div className="flex items-center justify-center rounded-full bg-white h-12 w-12">
                <FileText className="h-6 w-6 text-black" />
            </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Resume</h3>
            <p className="text-sm text-muted-foreground">
              Simply drag and drop your PDF or Word document
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-shine rounded-full flex items-center justify-center mx-auto mb-4 shimmer">
             <div className="flex items-center justify-center rounded-full bg-white h-12 w-12">
                <Brain className="h-6 w-6 text-black" />
             </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get comprehensive ATS scoring and optimization insights
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-shine rounded-full flex items-center justify-center mx-auto mb-4 shimmer">
              <div className="flex items-center justify-center rounded-full bg-white h-12 w-12">
               <Zap className="h-6 w-6 text-black" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Improve & Export</h3>
            <p className="text-sm text-muted-foreground">
              Apply suggestions and download your optimized resume
            </p>
          </div>
        </div>
        <div className="h-1/2 w-1/3 flex flex-col items-center">
  <FileUpload />
</div>
        
      </div>
    </GridBackgroundDemo>
  );
}

