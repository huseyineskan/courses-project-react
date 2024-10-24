import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory} />
      <MainContent selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}

export default App;
