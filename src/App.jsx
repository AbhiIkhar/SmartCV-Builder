import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <div>{"Let's the game begin"}</div>
      <Button>Start</Button>
      <Outlet />
    </>
  );
}

export default App;
