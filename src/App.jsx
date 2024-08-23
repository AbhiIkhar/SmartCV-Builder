import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/pages/Header";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  return !isSignedIn && isLoaded ? (
    <Navigate to={"/auth/sign-in"} />
  ) : (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
