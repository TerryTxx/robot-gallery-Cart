import React,{useState, useEffect} from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
import robot from "./components/Robot";
import robotDiscount from "./components/RobotDiscount";
import RobotDiscount from "./components/RobotDiscount";
interface Props { }

interface State {
    robotGallery: any[];
    count: number;
}

const App: React.FC = (props) => {
    const [count, setCount] = useState<number>(0);
    const [robotGallery, setRobotGallery] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>()

    useEffect(() => {
        document.title = `点击${count}次`
    }, [count])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const responses = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                // .then(response => response.json())
                // .then(data=>setRobotGallery(data))
                const data = await responses.json();
                setRobotGallery(data);
            } catch(e) {
                setError(e as string);
            }
            setLoading(false)
        };
        fetchData()
    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <h1>Robot Gallery online</h1>
            </div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >Click
            </button>
            <span>count:{count}</span>
            <ShoppingCart/>
            {!error || error !== "" && <div>website: {error}</div>}
            {!loading ?
                <div className={styles.robotList}>
                    {robotGallery.map((r, index) => (
                        index % 2 == 0 ? (
                            <RobotDiscount id={r.id} email={r.email} name={r.name} key={index}/>
                        ) : (
                            <Robot id={r.id} email={r.email} name={r.name} key={index}/>
                        )
                    ))}
                </div>
                : <h2>loading the page</h2>
            }
        </div>
    );
  }
export default App;
