import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SearchBar from "./components/SearchBar.js";
import Result from "./components/Result";

function App() {
  return (
      <>
          <Header>
              <SearchBar/>
          </Header>
          <Result/>
          <Footer/>
          </>
  );
}

export default App;
