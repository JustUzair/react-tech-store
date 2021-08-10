import React from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";
export default function DefaultPage() {
  return (
    <Hero img={defaultBcg} title="404" max="true">
      <h2 className="text-upperrcase error">Page Not Found</h2>
      <Link to="/" className="main-link">
        Return To Home
      </Link>
    </Hero>
  );
}
