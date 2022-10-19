import "./App.css";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="app">
      {/* Nav section */}
      <NavBar />
      {/* Landing page */}
      <Landing />
      {/* Challenge section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
