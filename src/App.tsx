import { useRevealAnimations } from "./hooks/useRevealAnimations";
import { AppRouter } from "./router/AppRouter";

function App() {
  useRevealAnimations();

  return <AppRouter />;
}

export default App;
