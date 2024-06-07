import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        GitTix
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {currentUser ? (
            <>
              <li className="nav-item">
                <Link href="/tickets/new" className="nav-link">
                  Sell Tickets
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/orders" className="nav-link">
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/auth/signout" className="nav-link">
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="/auth/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/auth/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
