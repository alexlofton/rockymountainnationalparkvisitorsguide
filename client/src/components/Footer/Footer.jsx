import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li><Link to="/trails">Trails</Link></li>
                    <li><Link to="/wildlife">Wildlife</Link></li>
                    <li><Link to="/visitor-amenities">Visitor Amenities</Link></li>
                    <li><Link to="/donate">Click to Donate! </Link></li>
                </ul>
            </nav>
            <p>&copy; 2024 Team 1 Project 3</p>
        </footer>
    )
};

export default Footer;