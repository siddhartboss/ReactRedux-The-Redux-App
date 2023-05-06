import React from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";

const Shop = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Buy Adidas Shoes 50 Rs</h2>
      <button className="btn btn-primary mx-2" onClick={() => {action.addMoney(100)}}>-</button>
      Buy Thsi Item
      <button className="btn btn-primary mx-2" onClick={() => {action.removeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
