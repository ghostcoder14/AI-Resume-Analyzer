// app/(site)/layout.tsx
import Navbar from "../components/Navbar";
import FooterUi from "../components/FooterUI";

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
