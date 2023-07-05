import Header from "./Header"
import { MyContext } from "../MyContext"


export default function Home(){
    const { darkMode } = useContext(MyContext)
    return(
        <div className={`homeWrapper ${darkMode ? "dark-mode" : ""}`}>
            <Header />
            <h1>Home</h1>
        </div>
    )
}