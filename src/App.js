import "./App.css";
import "./components/MainSection";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PackageSection from "./components/PackageSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <PackageSection />
      <Footer />
    </div>
  );
}

export default App;
