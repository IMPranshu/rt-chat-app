import "./App.css";
import Messenger from "./components/Messenger";
import LoginDialog from "./components/account/LoginDialog";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "858876960983-v0sjojr6re6qoiqjhhv3ukn38bd2d81b.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginDialog />
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
