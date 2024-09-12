import {
    // Link, 
    // useLocation, 
    // Outlet 
} from 'react-router-dom';
const NavbarComponent = () => (
    <>
        <nav aria-label="Page navigation sticky-bottom">
            <ul className="pagination justify-content-center mt-5">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </>
)

export default NavbarComponent;
