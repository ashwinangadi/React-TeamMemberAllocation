const Footer = () => {
var today = new Date();
  
  return(
    <footer className = "container">
      <div className="row d-flex  justify-content-center my-4">
       <div className="coll-8 ">
          <h5>
            Team Member Allocation App - {today.getFullYear()}
          </h5>
         </div>
        </div>
    </footer>
  )
}

export default Footer