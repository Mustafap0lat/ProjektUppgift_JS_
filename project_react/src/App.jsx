import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Watchlist } from "./Components/Watchlist";
import { Watched } from "./Components/Watched";
import { Add } from "./Components/Add";
import { GlobalProvider } from "./Components/context/GlobalState";
import Pricing from "./Components/Pricing";
import PaymentForm from "./Components/payment/PaymentForm";
import Checkout from "./Components/payment/Checkout";
import Review from "./Components/payment/Review";
import Signin from "./Components/user/Signin";
import Startup from "./Components/onstart/Startup"
import "./lib/font-awesome/css/all.min.css";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Startup />
          </Route>

          <Route path ="/watchlist">
            <Watchlist />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>

          <Route path="/pricing">
            <Pricing />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <PaymentForm />
          </Route>

          <Route path="/review">
            <Review />
          </Route>
          
          <Route path="/signin">
            <Signin />
          </Route>
       
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
