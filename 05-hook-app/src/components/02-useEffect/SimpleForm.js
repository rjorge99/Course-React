import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });
    
    const { name, email } = formState;
    
    useEffect(() => {
    }, []);
    
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    
    return (
        <div>
            <h1>Use Effect</h1>
            <hr />
        
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
        
                { (name === "123") && <Message />}
            </div>
        </div>
    )
}
