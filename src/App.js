import { Login } from "./pages/Login";
import "bootstrap/dist/js/bootstrap.min.js"
import "./scss/App.scss";
// firebase authentications
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "../src/config/firebase";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
