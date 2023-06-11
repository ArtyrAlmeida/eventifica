import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { UpdateEvent } from "./components/Events/UpdateEvent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/atualizarEventos"
            element= {<UpdateEvent/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
