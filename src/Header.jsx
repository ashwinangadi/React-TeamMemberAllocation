
const Header = ({selectedTeam,teamMemberCount}) => {
  return(
    <header className="container">
      <div className="row d-flex  justify-content-center my-4">
       <div className="coll-8 ">
        <h1>
          Team Member Allocation
        </h1>
        <h3>
           {selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "Member" : `Members`}
        </h3>
       </div>
      </div>
      
      
    </header>
  )
}

export default Header