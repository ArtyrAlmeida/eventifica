import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { UpdateEvent } from "./components/Events/UpdateEvent";
/* import { RequireAuth } from "react-auth-kit"; */

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
            element= {
            /*<RequireAuth loginPath="/login">
              <UpdateEvent/>
            </RequireAuth> */
            <UpdateEvent/>
          }
          />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
