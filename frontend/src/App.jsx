import Events from './components/Events'
import Academics from './components/Academics'

import Facilities from './components/Facilities'
import Classrooms from './components/facilities/Classrooms'
import Library from './components/facilities/Library'
import Labs from './components/facilities/Labs'
import Canteen from './components/facilities/Canteen'
import Infrastructure from './components/facilities/Infrastructure'
import Hostel from './components/facilities/Hostel'
import FeedbackLanding from './components/FeedbackLanding'
import FeedbackPage from './components/FeedbackPage'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {


  return (
    <Router>

      <Routes>
        <Route path='/' element={<FeedbackLanding />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/feedback/facilities' element={<Facilities />} />
        <Route path='/feedback/facilities/classroom' element={<Classrooms />} />
        <Route path='/feedback/facilities/library' element={<Library />} />
        <Route path='/feedback/facilities/labs' element={<Labs />} />
        <Route path='/feedback/facilities/canteen' element={<Canteen />} />
        <Route path='/feedback/facilities/infra' element={<Infrastructure />} />
        <Route path='/feedback/facilities/hostel' element={<Hostel />} />

        <Route path='/feedback/events' element={<Events />} />
        <Route path='/feedback/academics' element={<Academics />} />


      </Routes>


    </Router>

  )
}

export default App
