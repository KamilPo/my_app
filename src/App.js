import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Events from "./pages/Events"
import Event from "./pages/Event"
import Layout from "./pages/Layout"
import './App.css';
import CreateEvent from './pages/CreateEvent';
import Categories from './pages/Categories';
import CreateCategory from './pages/CreateCategory';
import { useLocalStorage } from './useLocalStorage';
import eventsData from './data/eventsData';
import categoriesData from './data/categoriesData';

function App() {
  const [events, setEvents] = useLocalStorage("events", eventsData)
  const [categories, setCategories] = useLocalStorage("categories", categoriesData)

  return ( 
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path={"/"} element={<h1>home</h1>}></Route>
        <Route path={"/events"} element={<Events events={events} categories={categories}/>}></Route>
        <Route path={"/events/:id"} element={<Event events={events} categories={categories}/>}></Route>
        <Route path={"/createEvent"} element={<CreateEvent events={events} categories={categories} setEvents={setEvents}/>}></Route>
        <Route path={"/categories"} element={<Categories categories={categories}/>}></Route>
        <Route path={"/categories/:id"} element={<h1>kategorie id</h1>}></Route>
        <Route path={"/createCategory"} element={<CreateCategory categories={categories} setCategories={setCategories}/>}></Route>
        <Route path={"/table"} element={<h1>table</h1>}></Route>
      </Route>
    </Routes>
  
  </BrowserRouter>
    );
}

export default App;
