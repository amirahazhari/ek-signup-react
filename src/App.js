import './App.css';
import  MyForm from './signup';
import AvatarSelection from './choosechar';
import './Assets/images/information-outline.svg';
import './css/style.css';
import './css/font.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/choosechar" element={<AvatarSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
