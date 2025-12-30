import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style/navigation.css";

function Navigation() {

  return (
    <>
    <div className="navbar">
        <div className="navbar-logo">
            <img/>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/Addmission" className="navbar-link">Admission</Link>
          <Link to="/Social" className="navbar-link">Social Commitment</Link>
          <Button className="btn btn-light fw-bold">Login</Button>
        </div>
    </div>
    </>
  );
}

export default Navigation;