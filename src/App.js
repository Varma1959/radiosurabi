import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hygge from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="body-wrapper">
        <Hygge />

        <main style={{ minHeight: "70vh" }}>
          {/* Your page content goes here */}
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
