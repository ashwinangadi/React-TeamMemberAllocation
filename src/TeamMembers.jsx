import { useContext } from 'react'
import DataContext from './AppContext'
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';

const TeamMembers =()=>{

  const {selectedTeam,handleEmployeeCardClick,employees}=useContext(DataContext)
  
  return (
     employees.map((employee) => (
              <div key={employee.id} id={employee.id} className={employee.teamName === selectedTeam ? "card m-2 border border-2 border-dark":"card m-2"} style={{ cursor : "pointer" }} onClick={handleEmployeeCardClick}>
                {employee.gender == "male"?<img src={maleProfile} className="card-img-top" />:<img src={femaleProfile} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">Full Name : {employee.fullName}</h5>
                    <p className="card-text"><b>Designation :</b> {employee.designation}</p>
                  </div>
              </div>
            ))
  )
}

export default TeamMembers