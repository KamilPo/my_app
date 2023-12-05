import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Events from "./pages/Events"
import Event from "./pages/Event"
import Layout from "./pages/Layout"
import './App.css';
import CreateEvent from './pages/CreateEvent';
import Categories from './pages/Categories';
import CreateCategory from './pages/CreateCategory';

function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path={"/"} element={<h1>home</h1>}></Route>
        <Route path={"/events"} element={<Events/>}></Route>
        <Route path={"/events/:id"} element={<Event/>}></Route>
        <Route path={"/createEvent"} element={<CreateEvent/>}></Route>
        <Route path={"/categories"} element={<Categories/>}></Route>
        <Route path={"/categories/:id"} element={<h1>kategorie id</h1>}></Route>
        <Route path={"/createCategory"} element={<CreateCategory/>}></Route>
        <Route path={"/table"} element={<h1>table</h1>}></Route>
      </Route>
    </Routes>
  
  </BrowserRouter>
    );
}

export default App;
