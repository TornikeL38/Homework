import "../Components/style.css"
import { Link } from 'react-router-dom';
import { MyContext } from "../MyContext";



export default function Header(){

const {darkmode} = useContext(MyContext)
const {setDarkmode} = useContext(MyContext)


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
            <button ocClick = {() => setDarkmode(!darkmode)}>Dark mode</button>
        </header>
    </div>
    )
}