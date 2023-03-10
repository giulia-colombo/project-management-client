import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';


function App() {
  return (
    <div className="App">
      
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
