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
import Category from './pages/Category';
import Table from './pages/Table';
import EditEvent from './pages/EditEvent';

function App() {
  const [events, setEvents] = useLocalStorage("events", eventsData)
  const [categories, setCategories] = useLocalStorage("categories", categoriesData)

  // function appCreateEvent(eventData) {
  //   //todo change this nextEventId
  //   console.log(eventData)
  //   const eventId = Math.max.apply(Math, (events.map(id => id.id)))
	// 	console.log(eventId)
	// 	const newEventIndex = eventId + 1
	// 	setEvents(prevState => {
	// 		return [...prevState,
	// 		{
	// 			"id": newEventIndex,
	// 			"startDate": eventData.startDate,
	// 			"endDate": eventData.endDate,
	// 			"title": eventData.title,
	// 			"description": eventData.description,
  //       "url": eventData.url,
  //       "categoryId": eventData.categoryId
	// 		}]
	// 	}
	// 	)
	// }

  return ( 
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path={"/"} element={<Events events={events} categories={categories}/>}></Route>
        <Route path={"/events"} element={<Events events={events} categories={categories}/>}></Route>
        <Route path={"/events/:id"} element={<Event events={events} categories={categories} setEvents={setEvents}/>}></Route>
        <Route path={"/editEvent/:id"} element={<EditEvent events={events} categories={categories} setEvents={setEvents}/>}></Route>
        <Route path={"/createEvent"} element={<CreateEvent events={events} categories={categories} setEvents={setEvents}/>}></Route>
        <Route path={"/categories"} element={<Categories categories={categories}/>}></Route>
        <Route path={"/categories/:id"} element={<Category events={events} categories={categories} setCategories={setCategories}/>}></Route>
        <Route path={"/createCategory"} element={<CreateCategory categories={categories} setCategories={setCategories}/>}></Route>
        <Route path={"/table"} element={<Table events={events} categories={categories}/>}></Route>
      </Route>
    </Routes>
  
  </BrowserRouter>
    );
}

export default App;
