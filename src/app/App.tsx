import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { ButtonUp } from "@/shared/ui/ButtonUp/ButtonUp";
import { ContactUs } from "@/features/ContactUs";
import { Header } from "@/widgets/Header";

function App() {
  return (
    <Suspense fallback="">
      <Header />
      <AppRouter />
      <ButtonUp />
      <ContactUs />
    </Suspense>
  );
}

export default App;
