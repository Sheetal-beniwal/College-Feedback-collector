

import Facilities from './components/Facilities'
import Classrooms from './components/facilities/Classrooms'
import FeedbackLanding from './components/FeedbackLanding'
import FeedbackPage from './components/FeedbackPage'

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'

function App() {
 

  return (
    <Router>
     
      <Routes>
  <Route path = '/' element = { <FeedbackLanding/>}/>
  <Route path = '/feedback' element = { <FeedbackPage/>}/>
  <Route path = '/feedback/facilities' element = { <Facilities/>}/>
  <Route path = '/feedback/facilities/classroom' element = { <Classrooms/>}/>
  
    
      </Routes>
      
      
    </Router>
   
  )
}

export default App
