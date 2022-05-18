import { Cards } from "./assets/Cards";

export function Dashboard() {
    return(
        <div className="whiteBox">
            <span>
                <Cards date="24/03/2022" local="Fortaleza-CE" description="Encontro com o Alpha"/>
                <Cards date="24/03/2022" local="Fortaleza-CE" description="Encontro com o Alpha"/>
                <Cards date="24/03/2022" local="Fortaleza-CE" description="Encontro com o Alpha"/>
            </span>
        </div>
    );
}