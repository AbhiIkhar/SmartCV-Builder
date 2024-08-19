/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={50} height={50} />
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
