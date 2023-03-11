import React from "react";
import styles from "./ShoppingCart.module.css";
import {FiShoppingCart} from "react-icons/fi";
interface Props { }

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = { 
      isOpen: false,
    };
    // no arrow function，bind this
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick(e:any) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  // this points to handleClick
  // handleClick(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  // arrow this inShoppingCart（recommend）
  // handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  //no arrow
  // handleClick (e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
   
  // event obj
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", e.target)
    console.log("e.currentTarget", e.currentTarget)
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }   
  }
  render() {
    return (
      // <div className={styles.c artContainer}>
      //   <button className={styles.button}
      //     onClick={this.handleClick}
      //   >
      //     cart 2 （pc）
      //   </button>
      //   <div className={styles.cartDropDown}
      //     style={{
      //       display: this.state.isOpen ? "block" : "none",
      //     }}
      //   >
      //     <ul>
      //       <li>robot1</li>
      //       <li>robot2</li>
      //     </ul>
      //   </div>
      // </div>
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={this.handleClick}
        >
           <FiShoppingCart />
          <span>cart 2 （pcs）</span>
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
