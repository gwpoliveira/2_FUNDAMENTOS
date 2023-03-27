const Challenge = () =>{
    const A = 5;
    const B = 6;

    const soma = A+B;

    return (
        <div>
            <h1>
                Os numeros digitados são {A} e {B};
            </h1>

            <button onClick = {() => console.log(soma)}>
                Clique aqui para soma os numeros
            </button>
        </div>
    );
};

export default Challenge