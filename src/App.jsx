import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import DownloadApp from "./components/DownloadApp";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <DownloadApp />
    </>
  );
}

export default App;