import './App.css'
import Header from './Header'
import Employees from './Employees'
import GroupedTeamMembers from "./GroupedTeamMembers"
import Nav from './Nav'
import Footer from './Footer'
import NotFound from './NotFound'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {DataProvider} from './AppContext'

export default function App() {
  
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header /> 
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  )
}
