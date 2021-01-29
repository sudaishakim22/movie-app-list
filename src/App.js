import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./page/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="App flex flex-col h-screen"
        style={{ backgroundColor: "#1e1d1d" }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
