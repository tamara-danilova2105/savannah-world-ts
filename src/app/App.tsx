import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";
import { Header } from "@/widgets/Header";
import { MobileOnlyView } from "react-device-detect";
import { NavbarMobile } from "@/features/Navbar";

function App() {
  return (
    <Suspense fallback="">
      <Header />
      <AppRouter />
      <ButtonUp />
      <ContactUs />      
      <MobileOnlyView>
        <NavbarMobile />
      </MobileOnlyView>
    </Suspense>
  );
}

export default App;
