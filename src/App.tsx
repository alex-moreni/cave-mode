import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

interface PartialUser {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

function App() {
  const [user, setUser] = useState<PartialUser>();
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando..</p>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/home" />}
          ></Route>
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/auth" />}
          ></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
