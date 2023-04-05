import { useContext } from 'react';
import DataContext from './AppContext';

import Teams from './Teams';
import TeamMembers from './TeamMembers'
const Employees = () => {

  const {employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange} = useContext(DataContext)
  
  return(
    <main className = "container">
      <div className="row justify-content-center my-3">
        <div className="col-6">
            <Teams />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col-8">
          <div className="card-collection">
          
             <TeamMembers />
          
            </div>
        </div>
      </div>
    </main>
  )
}

export default Employees