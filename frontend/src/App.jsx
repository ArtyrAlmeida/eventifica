import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { UpdateEvent } from "./components/Events/UpdateEvent";
import { Login } from "./components/Auth/Login";
import { Registration } from "./components/Auth/Registration";
import { RequireAuth } from "react-auth-kit";
import { useEffect, useState } from "react";
import { EventList } from "./components/Events/EventList";
import { Error } from "./components/Error/Error";

function App() {
  const [authState, setAuthState] = useState({
    email: '',
    role: ''
  })

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem("autenticacao_state"))
    if(authState) {
      setAuthState(authState)
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                {authState.role == 'REGULAR' ? <EventList/> : <Home />}
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
              {authState.role == 'ADMIN' ? <UpdateEvent/> : <Error/>}
            </RequireAuth>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
