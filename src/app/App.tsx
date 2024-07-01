import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";
import { Header } from "@/widgets/Header";
import { NavbarMobile } from "@/features/Navbar";
import { Footer } from "@/widgets/Footer";

function App() {
  return (
    <Suspense fallback="">
      <Header />
      <AppRouter />
      <ButtonUp />
      <ContactUs />
      <Footer />
      <NavbarMobile />
    </Suspense>
  );
}

export default App;
