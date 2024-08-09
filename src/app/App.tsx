import { Suspense } from "react";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";
import { NavbarMobile } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import AppRouter from "./providers/router/ui/AppRouter";

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
