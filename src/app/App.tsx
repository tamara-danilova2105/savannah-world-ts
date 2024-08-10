import { Suspense } from "react";
import { ContactUs } from "@/features/ContactUs";
import { NavbarMobile } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import AppRouter from "./providers/router/ui/AppRouter";
import { ButtonUp } from "@/shared/ui/ButtonUp";

function App() {
  return (
    <div id='app'>
      <Suspense fallback="">
        <Navbar />
        <AppRouter />
        <ButtonUp />
        <ContactUs />
        <Footer />
        <NavbarMobile />
      </Suspense>
    </div>
  );
};

export default App;
