import React,{useContext} from "react";
import styles from "./Robot.module.css";
import {appContext,appSetStateContext} from "../AppState";
import {withAddToCart} from "./AddToCart";

export interface RobotProps {
    id:number,
    name:string,
    email:string,
    addToCart:(id,name)=>void;
}
const Robot : React.FC<RobotProps> = ({id,name,email,addToCart}) => {
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext)

    return(
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>author:{value.username}</p>
            <button onClick={() => addToCart(id,name)}>add to cart</button>
        </div>
    );
};
export default withAddToCart(Robot);