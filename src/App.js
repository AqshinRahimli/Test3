import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Students from "./Pages/Students";
import Payments from "./Pages/Payments";
import Courses from "./Pages/Courses";
import Costs from "./Pages/Costs";


import "./Styles/main.scss"


function App() {
  return (
    <div className="App">
      <Header/>
 <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/costs" element={<Costs />} />
    </Routes>
    
    </div>
  );
}

export default App;
