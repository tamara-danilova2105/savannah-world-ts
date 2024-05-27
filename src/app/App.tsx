import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";

function App() {
  return (
    <div>
      <Suspense fallback="">
        {/* <Navbar /> */}
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
