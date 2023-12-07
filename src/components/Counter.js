import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Component } from 'react';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const show = useSelector(state=>state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  };
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  };

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {increaseHandler}>Increment by 5</button>
        <button onClick = {decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
