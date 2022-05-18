import { Buttons } from "./assets/Buttons";

export function Header() {
	return (
        <header> 
            <div className="header">
                <ul>
                    <il><Buttons class="start_button" text="Inicio" /></il>
                    <il>Btn2</il>
                    <il>Btn3</il>
                    <il>Btn4</il>
                </ul>
                <img className="user_img" src="./img/user.png" alt="" />  
            </div>
        </header>
    );
}