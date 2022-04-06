
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route}  from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/mynotes' component={() => <MyNotes />} />
    </main>
    <Footer />
  </BrowserRouter>
)

export default App;
