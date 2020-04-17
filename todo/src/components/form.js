import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "../reducer/reducer";

export const Form = () => {

    const [todo, setnewTask] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        e.preventDefault();

        setnewTask(e.target.value);
        console.log(todo);
        
    }

    // const handleSubmit = e => {
    //     e.preventDefault();

        // dispatch({ type: "ADD_TODO", payload: e})
    // }

    return(
        <div>
            
            <form onSubmit={() => dispatch({ type: "ADD_TODO", payload: todo})}>
                {state.map((X) => 
                    // return(
                        // <div key={X.id}>
                            <h1 key={X.id}>{X.item}</h1>
                        // </div>
                    // )
                )}
                <label>
                    <input 
                        // id="taskInput"
                        name="todo"
                        placeholder="Type in a task.."
                        value={todo}
                        onChange={handleChanges}
                    />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

