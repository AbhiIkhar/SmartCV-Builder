import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/pages/Header";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  return !isSignedIn && isLoaded ? (
    <Navigate to={"/auth/sign-in"} />
  ) : (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
