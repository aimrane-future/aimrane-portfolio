import React from "react";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>AIMRANE BARA Portfolio</h1>
        <p>Developer of Smart Scripts for E-commerce</p>
      </header>
      <section style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>My Projects</h2>
        <div style={{ backgroundColor: "white", padding: "1rem", borderRadius: "10px" }}>
          <h3>Price Alert Bot</h3>
          <p>Monitors product prices and sends alerts when prices drop.</p>
          <a href="#" style={{ color: "blue", textDecoration: "underline" }}>Request Access</a>
        </div>
      </section>
    </div>
  );
}
