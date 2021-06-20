import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import Theme from "./Theme";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Theme />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
