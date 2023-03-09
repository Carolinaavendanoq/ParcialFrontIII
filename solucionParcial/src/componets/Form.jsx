import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const[name, setName] = useState('');
    const[team, setTeam] = useState('');
    const[errorTeam, setErrorTeam] = useState(false);
    const[errorName, setErrorName] = useState(false);

    const isValidName = name.length >= 6;

    const validateTeam = (team) => {
        const withoutSpaces = team.trim();
        if(withoutSpaces.length >= 3){
            return true;
        }else{
            return false;
        }
    };
    

    const signUpUser = (e) => {
        e.preventDefault();

        const isTeamValid = validateTeam(team);

        if(isTeamValid && isValidName){
            setErrorTeam(false);
            setErrorName(false);
            alert("Usuario creado correctamente")
        }else if(!isTeamValid || !isValidName){
            setErrorTeam(true);
            setErrorName(true);
            alert("Por favor chequea que la información sea correcta");
        }else{
            alert("Por favor chequea que la información sea correcta");
        }
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onTeamChange = (e) => {
        setTeam(e.target.value);
    };

    return (
        <>
            <form onSubmit={signUpUser}>
                <div>
                    <p>Ingrese identificación de camada:</p>
                    <input type="text" placeholder="C11" onChange={onTeamChange}/>
                    <br />
                    <p>Ingrese su nombre de usuario:</p>
                    <input type="text" onChange={onNameChange}/>
                </div>
                <br />
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <div>
                <Card name={name} team ={team}></Card>
            </div>
        </>
    );
};

export default Form