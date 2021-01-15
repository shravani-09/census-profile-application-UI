import logo from './logo.svg';
import './App.css';
//import Footer from './Components/Footer/Footer';
// import Navigation from './Components/Header/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateMemberComponent from './Components/Member/CreateMemberComponent';
import ListMemberComponent from "./Components/Member/ListMemberComponent";
import UpdateMemberComponent from './Components/Member/UpdateMemberComponent';
import ViewMemberComponent from "./Components/Member/ViewMemberComponent";
import LoginUserComponent from "./Components/User/LoginUserComponent";
import CreateUserComponent from './Components/User/CreateUserComponent';
import './FontAwesomeIcons/font.js'



function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Router>
        {/* <div className="container"> */}
          <Switch>
            <Route path="/" exact component={ ListMemberComponent}></Route>
            <Route path="/member" component={LoginUserComponent}></Route>
            <Route path="/add-member" component={CreateMemberComponent}></Route>
            <Route path="/update-member/:id" component={UpdateMemberComponent}></Route>
            <Route path="/view-member/:id" component={ViewMemberComponent}></Route>
            <Route path="/add-user" component={CreateUserComponent}></Route>
          </Switch>
        {/* </div> */}
       


        {/* <FooterComponent /> */}
      {/* <Footer/> */}
      </Router>

    </div>

  );
}
export default App;
