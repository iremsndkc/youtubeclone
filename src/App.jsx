import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Results from "./pages/Results";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
