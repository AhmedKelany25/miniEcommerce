import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
