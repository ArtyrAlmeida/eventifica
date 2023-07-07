import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { UpdateEvent } from "./components/Events/UpdateEvent";
import { Login } from "./components/Auth/Login";
import { Registration } from "./components/Auth/Registration";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <Home />
              </RequireAuth>
          }
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/register"
            element={<Registration/>}
          />
          <Route
            path="/atualizarEventos"
            element= {
            <RequireAuth loginPath="/login">
              <UpdateEvent/>
            </RequireAuth>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
