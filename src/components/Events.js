const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Ativou o Evento")
    };

    const renderSomething = (x) => {

        if (x) {
            return <h1> Renderizando isso:</h1>;
        }
        else{
            return <h1> Também posso renderixar isso!</h1>;
        }

    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <br /><br />
                <button onClick={() => console.log("Clicou!")}>
                    Clique aqui tambem!
                </button>
                <br /><br />
                <button
                    onClick={() => {
                        if (true) {
                            console.log("Isso não deveria existir =)");
                        }
                    }}
                >
                    Clica aqui, por favor.
                </button>

            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events