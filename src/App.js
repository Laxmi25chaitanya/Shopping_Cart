import React from 'react';
import { connect } from 'react-redux';
import { data } from './content';
//import { increment1, increment2, increment3, increment4, increment5 } from './action';
// import {increment2} from './action';
// import {increment3} from './action';
// import {increment4} from './action';
// import {increment5} from './action';
//import { useDispatch,useSelector } from 'react-redux';
function App(props) {
  //const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);
  // const ipad = useSelector(state => state.ipad);
  // const croptop = useSelector(state => state.croptop);
  // const Kettles = useSelector(state => state.Kettles);
  // const trousers = useSelector(state => state.trousers);
  // const jeans = useSelector(state => state.jeans);
  // const ipad2cart = useSelector(state => state.ipad2cart);
  // const croptop2cart = useSelector(state => state.croptop2cart);
  // const Kettles2cart = useSelector(state => state.Kettles2cart);
  // const trousers2cart = useSelector(state => state.trousers2cart);
  // const jeans2cart = useSelector(state => state.jeans2cart);
  return (
    <div><h1>Shopping Cart</h1>
      <hr />
      <h2>{data.content.heading}</h2>
      <p>{data.content.Products.p1} - {data.content.Price.price1} - {props.ipad}</p>
      {props.ipad === 0 ? <button disabled>Out of Stock</button> :
        <button onClick={() => props.increment1()}>{data.content.button.enable}</button>}
      <p>{data.content.Products.p2} - {data.content.Price.price2} - {props.croptop}</p>
      {props.croptop === 0 ? <button disabled>{data.content.button.disable}</button> :
        <button onClick={() => props.increment2()}>{data.content.button.enable}</button>}
      <p>{data.content.Products.p3} - {data.content.Price.price3} - {props.Kettles}</p>
      {props.Kettles === 0 ? <button disabled>{data.content.button.disable}</button> :
        <button onClick={() => props.increment3()}>{data.content.button.enable}</button>}
      <p>{data.content.Products.p4} - {data.content.Price.price4} - {props.trousers}</p>
      {props.trousers === 0 ? <button disabled>{data.content.button.disable}</button> :
        <button onClick={() => props.increment4()}>{data.content.button.enable}</button>}
      <p>{data.content.Products.p5} - {data.content.Price.price5} - {props.jeans}</p>
      {props.jeans === 0 ? <button disabled>{data.content.button.disable}</button> :
        <button onClick={() => props.increment5()}>{data.content.button.enable}</button>}
      <hr />
      <h2>Your Cart</h2>
      {props.ipad2cart > 0 ? <p>{data.content.Products.p1} - {data.content.Price.price1} x{props.ipad2cart}</p> : ''}
      {props.croptop2cart > 0 ? <p>{data.content.Products.p2} - {data.content.Price.price2} x{props.croptop2cart}</p> : ''}
      {props.Kettles2cart > 0 ? <p>{data.content.Products.p3} - {data.content.Price.price3} x{props.Kettles2cart}</p> : ''}
      {props.trousers2cart > 0 ? <p>{data.content.Products.p4} - {data.content.Price.price4} x{props.trousers2cart}</p> : ''}
      {props.jeans2cart > 0 ? <p>{data.content.Products.p5} - {data.content.Price.price5} x{props.jeans2cart}</p> : ''}
      <p>Total : {props.counter}</p>
      {props.counter === 0 ? <button disabled>{data.content.button.checkout}</button> : <button>{data.content.button.checkout}</button>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    ipad: state.ipad,
    Kettles: state.Kettles,
    croptop: state.croptop,
    trousers: state.trousers,
    jeans: state.jeans,
    ipad2cart: state.ipad2cart,
    Kettles2cart: state.Kettles2cart,
    croptop2cart: state.croptop2cart,
    trousers2cart: state.trousers2cart,
    jeans2cart: state.jeans2cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment1: () => dispatch({ type: 'ADD_TO_CART1' }),
    increment2: () => dispatch({ type: 'ADD_TO_CART2' }),
    increment3: () => dispatch({ type: 'ADD_TO_CART3' }),
    increment4: () => dispatch({ type: 'ADD_TO_CART4' }),
    increment5: () => dispatch({ type: 'ADD_TO_CART5' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
