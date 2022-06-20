import { Button } from "@chakra-ui/react";
import "./App.css";
import { signUp } from "services/api";

function App() {
  const identityData = {
    username: "sadagxx@gmail.com",
    password: "testPass!",
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Test Env</p>
        <Button colorScheme="blue" onClick={() => signUp()}>
          {" "}
          Sign up{" "}
        </Button>
      </header>
    </div>
  );
}

export default App;
