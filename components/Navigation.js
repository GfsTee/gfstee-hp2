import React, { useState } from "react";
import Link from "next/link";
const Navigation = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          justify-content: space-around;
        }
        a {
          display: block;
          color: #fff;
          padding: 15px;
          background: #333;
          border-radius: 5px;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
