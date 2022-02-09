import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    
    const { state, increment, decrement, reset } =  useCounter(100);

    return (
        <>
            <h1>Counter with custom hook {state}</h1>
            <hr />
            
            <button onClick={() => { increment() }} className="btn">+1</button>
            <button onClick={() => { decrement() }}className="btn">-1</button>
            <button onClick={ reset }className="btn">Reset</button>
        </>
    )
}
