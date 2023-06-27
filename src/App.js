import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NoteState from "./context/notes/NoteState";


function App() {

  return (
    <>
    <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact strict path="/about" element={<About />}></Route>
            <Route exact strict path="/" element={<Home />}></Route>
            <Route exact strict path="/login" element={<LoginForm />}></Route>
            <Route exact strict path="/signup" element={<SignupForm />}></Route>

          </Routes>
        </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
