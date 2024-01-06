import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "./components/axios";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
export const AppState = createContext();
function App() {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const checkUser = async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
      // console.log(data);
    } catch (error) {
      navigate("/login");
      return error.response;
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        {/* <Route
          path="/askquestion"
          element={
            
          }
        /> */}

        {/* <Route
          path="/Answer/:questionid"
          element={
            <>
              <Header />
              <Answer />
              <Footer />
            </>
          }
        /> */}
        {/* <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }
        /> */}
        {/* <Route
          path="/register"
          element={
            <>
              <Header />
              <SignIn />
            </>
          }
        /> */}
      </Routes>
      <Footer />
    </AppState.Provider>
  );
}

export default App;
