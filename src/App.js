import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path={"/home"} element={<h1>home</h1>}></Route>
      <Route path={"/events"} element={<h1>chuj</h1>}></Route>
      <Route path={"/categories"} element={<h1>kategorie</h1>}></Route>
      <Route path={"/events/:id"} element={<h1>events id</h1>}></Route>
      <Route path={"/categories/:id"} element={<h1>kategorie id</h1>}></Route>
      <Route path={"/table"} element={<h1>table</h1>}></Route>
    </Routes>
  
  </BrowserRouter>
    );
}

export default App;
