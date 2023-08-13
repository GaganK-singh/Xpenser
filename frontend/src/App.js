import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
    <Home />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
