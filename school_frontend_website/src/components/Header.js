import Navigation from "./Navigation";

function Header(){

    return(
        <>
        <header className="bg-primary text-white py-3 shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="m-0 fw-bold">ABC International School</h2>
                <Navigation/>
            </div>
        </header>
        </>
    )
}
export default Header;