import { Dashboard } from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import {
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
function App() {
  return (
    <>
      <SignedOut>
        <Welcome />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </>
  );
}

export default App;
