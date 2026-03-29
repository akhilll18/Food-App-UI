import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <DownloadApp />
      <Footer/>
    </>
  );
}

export default App;