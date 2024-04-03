import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-list">
                    <li><Link to="/trails">Trails &#129406;</Link></li>
                    <li><Link to="/wildlife">Wildlife &#128017;</Link></li>
                    <li><Link to="/visitor-amenities">Visitor Amenities &#127957;</Link></li>
                    <li><Link to="/donate">Click to Donate! &#128178;</Link></li>
                </ul>
            </nav>
            <p className="footer-text">&copy; 2024 Team 1 Project 3</p>
        </footer>
    )
};

export default Footer;