export function Cards(props) {
    return(
        <div>
            <h1>{props.date}</h1>
            <h3>{props.local}</h3>
            <h2>{props.description}</h2>
        </div>
    );
}