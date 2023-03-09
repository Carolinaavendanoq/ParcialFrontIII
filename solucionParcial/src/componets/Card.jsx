const Card = ({name, team}) => {
    return (
        <>
            <h2>Datos de registro</h2>
            <p>Camada: {team}</p>
            <p>Nombre: {name}</p>
        </>
    );
};

export default Card