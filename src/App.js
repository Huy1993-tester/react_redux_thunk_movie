// import logo from './logo.svg';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/home.page";
import MovieDetailPage from "./pages/movieDetailPage/movie-detail.page";
import SignIn from "./pages/signIn/sign-in.page";

function App() {
  return (
    //  <HomePage/>
    // <MovieDetailPage/>
    // Switch giup chi hien thi 1 trang duy nhat
    //{path = "/" => url = "http://localhost:3000"}
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/movie-detail" exact={true}>
          <MovieDetailPage />
        </Route>
        <Route path="/sign-in" exact={true}>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
