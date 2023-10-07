import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
// import Upload from "./components/Upload";


function App() {
  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
