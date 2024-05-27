import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";

function App() {
  return (
    <Suspense fallback="">
      {/* <Navbar /> */}
      <AppRouter />
      <ButtonUp />
      <ContactUs />
    </Suspense>
  );
}

export default App;
