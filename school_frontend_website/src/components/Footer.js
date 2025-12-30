import "./style/footer.css";

function Footer(){

    return(
        <>
        <footer className="footer">
        <div className="footer-container">

            <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <p>Home</p>
            <p>AIMS</p>
            <p>FACT</p>
            <p>Social Commitment</p>
            <p>Branches</p>
            <p>Query / Suggestions</p>
            <p>Admissions</p>
            <p>Admission Process</p>
            <p>Enquiry</p>
            <p>Withdrawal Policy</p>
            </div>

            <div className="footer-column">
            <h4 className="footer-heading">Achievements</h4>
            <p>10th Class</p>
            <p>National Level Test</p>

            <h4 className="...footer-heading" style={{ marginTop: "12px"}}>Useful Links</h4>
            <p>Privacy Policy</p>
            <p>Events</p>
            </div>

            <div className="footer-column">
            <h4 className="footer-heading">Our Branches</h4>
            <p>Gudavalli</p>
            <p>Vijayawada</p>
            <p>Guntur</p>
            <p>Nellore</p>
            <p>Tanuku</p>
            <p>Gudiwada</p>
            <p>Hyderabad</p>
            <p>Rajahmundry</p>
            <p>Eluru</p>
            <p>Kakinada</p>
            </div>

            <div className="footer-column">
            <h4 className="footer-heading">Campus</h4>
            <p>Labs</p>
            <p>Library</p>

            <h4 className="...footer-heading" style={{ marginTop: "12px" }}>Connect with us</h4>
            <p>Email</p>
            <p>Phone</p>
            <p>Facebook</p>
            <p>Instagram</p>
            </div>

        </div>

        <div className="footer-bottom">
        School Management System
        </div>
        </footer>        
        </>
    )
}
export default Footer;