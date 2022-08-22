import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transaction,
  Loader,
} from "./Components/index";

function App() {
  return (
      <div className=" App gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
        <Transaction />
        <Footer />
    </div>
  );
}

export default App;
