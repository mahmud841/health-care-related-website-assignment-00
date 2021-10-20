import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Doctors from './components/Home/Home/Doctors/Doctors';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Email from './components/Login/Email/Email';
import Details from './components/Details/Details/Details';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/home">
              <Home></Home>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/email">
              <Email></Email>
            </Route> 
            <Route path="/about">
              <About></About>
            </Route>
             <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute> 
            <Route path='/details/:detailsId'>
              <Details></Details>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
