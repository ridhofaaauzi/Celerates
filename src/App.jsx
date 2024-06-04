import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import ServiceNew from "./pages/ServiceNew";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/" element={<ServiceNew />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
