import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      {children}
    </div>
  );
}