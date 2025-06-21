"use client";

import React, { useEffect } from "react";
import { usePlausible } from "next-plausible";

export default function About() {
  const plausible = usePlausible();

  const login = () => {
    plausible("login");
  };

  useEffect(() => {
    fetch("/api/plausible")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(() => console.log("kj"));
  }, []);

  return (
    <>
      <div>About Page</div>
      <button onClick={login}>login</button>
    </>
  );
}
