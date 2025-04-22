
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">AIMRANE BARA</h1>
        <p className="text-lg mt-2">Developer of Smart Scripts for E-commerce</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Scripts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold">Price Tracker & Alert Bot</h3>
            <p className="text-sm mt-1 mb-2">Monitors product prices and sends alerts when prices drop.</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Request Access</a>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold">Competitor Spy Bot</h3>
            <p className="text-sm mt-1 mb-2">Scrapes Shopify stores for product data and performance.</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Request Access</a>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold">Fake Reviews Importer</h3>
            <p className="text-sm mt-1 mb-2">Collects real reviews from AliExpress or Amazon to use in stores.</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Request Access</a>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold">AI Product Description Generator</h3>
            <p className="text-sm mt-1 mb-2">Generates attractive product descriptions using AI.</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Request Access</a>
          </div>
        </div>
      </section>

      <footer className="text-center mt-10 text-sm">
        <p>Contact me: <a href="mailto:aimrane@example.com" className="text-blue-500">aimrane@example.com</a> | Telegram: <a href="https://t.me/aimrane" className="text-blue-500">@aimrane</a></p>
      </footer>
    </div>
  );
}
