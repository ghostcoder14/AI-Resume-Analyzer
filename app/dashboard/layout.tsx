// app/(site)/layout.tsx

import { SidebarBody } from "../components/ui/sidebar";




export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
