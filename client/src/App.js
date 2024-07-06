import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CartModal from "./components/portal/Modals/CartModal";

function App() {
  return (
    <div className="App">
      <CartModal />
      <Header />
      <Home />
    </div>
  );
}

export default App;
