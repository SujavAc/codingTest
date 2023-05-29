import { Provider } from "react-redux";
import store from "../src/Store/Reducer/rootReducer";
import Template from './Template/Index';


function App() {
  return (
    <Provider store={store}>
      <Template />
    </Provider>

  );
}

export default App;
