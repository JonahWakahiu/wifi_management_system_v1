import "./App.scss";
import Navbar from "./components/navbar";
import MainSection from "./sections";

function App() {
  return (
    <div className="main_layout">
      {/* Main Layout */}
      <Navbar />
      <div className="content_section">
        <MainSection />
      </div>
    </div>
  );
}

export default App;
