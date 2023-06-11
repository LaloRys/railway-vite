import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Login} from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { supabase } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
        console.log("App Desconectado",session, event)
      } else {
        navigate("/Home");
        console.log("App Conectado",session, event)
      }
    })

    }, []);


  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar/>
        <div className="container">
      
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          
        </div>
      </TaskContextProvider>
    </div>
  );


}

export default App;
