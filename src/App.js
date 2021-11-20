import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./pages/Home/Home/Home";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage/ProductsPage";
import Register from "./pages/Login/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/products">
              {" "}
              <ProductsPage />{" "}
            </Route>
            <PrivateRoute path="/order">
              {" "}
              <Order />{" "}
            </PrivateRoute>
            <Route path="/login" component={Login} />

            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
