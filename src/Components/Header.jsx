import "../Components/style.css"
import { Link } from 'react-router-dom';



export default function Header(){
    return(
    <div>
        <header className="header">
            <h1>Re: educate</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/About">About us</Link>
                    </li>
                </ul>
            </nav>
            <button>Dark mode</button>
        </header>
    </div>
    )
}