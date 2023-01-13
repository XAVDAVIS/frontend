import { login, logout } from '../firebase';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
            <ul>
                {props.user ?
                <li>
                    <button onClick={login}>Login</button>
                </li>
                :
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            }
            </ul>
        </nav>
    );
}
export default Header;
