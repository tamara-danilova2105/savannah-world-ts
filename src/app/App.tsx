import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";
import { NavbarMobile } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";

function App() {
  return (
    <Suspense fallback="">
      <Navbar />
      <AppRouter />
      <ButtonUp />
      <ContactUs />
      <Footer />
      <NavbarMobile />
    </Suspense>
  );
}

export default App;
