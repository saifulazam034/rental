
import './App.css';
//import Layout from "./components/Layout/Layout";
import Website from './pages/Website';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import AddResidencies from './components/Add/AddResidencies';
import Privatecomponent from './components/Privatecomponent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ResidenciesList from './components/ResidenciesList/ResidenciesList';
function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<Privatecomponent/>}>
      <Route path="/Residencies" element={<ResidenciesList/>}/>
      <Route path="/AddResidency" element={<AddResidencies/>}/>
      <Route path="/" element={<Website/>}/>
      </Route>
      <Route path="Signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    
    </BrowserRouter>

  
  )
};

export default App;
