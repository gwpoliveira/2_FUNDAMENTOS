import Mycomponent from "./MyComponent";

const FirstComponent = () => {
    return(
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="paragrafo">Esse é meu texto</p>
            <Mycomponent />
        </div>
    );
};

export default FirstComponent;