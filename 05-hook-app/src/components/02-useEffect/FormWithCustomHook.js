
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });
    
    const { name, email, password } = formValues;
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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
                <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={ handleInputChange }
                />
        
                <button type="submit">Guardar</button>
            </div>
        </form>
    )
}
