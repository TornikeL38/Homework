import Header from "./Header"
import { MyContext } from "../MyContext"

export default function About(){

    const{darkMode} = useContext(MyContext)

    return(
        <div className={`aboutWrapper ${darkMode ? "darkMode" : ""}`}>
            <Header />
            <h1>About us</h1>
        </div>
    )
}