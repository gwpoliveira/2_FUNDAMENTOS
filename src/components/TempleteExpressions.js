const TempleteExplressions = () => {
    const name = "Gleiser Wesley"
    const date = {
        age : 44,
        job : "Analista de  TI",
    };
    return(
        <div>
            <h1>Olá {name}, você está bem?</h1>
            <h2>{name}, você tem {date.age} e é {date.job} certo?</h2>
        </div>
    );
};

export default TempleteExplressions;