import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
