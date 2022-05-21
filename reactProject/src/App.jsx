import Inputs from "./site/Inputs";
import Header from "./site/Header";
import ToDoList from "./site/ToDoList";

export function App() {
	return (  
		<div>
			<Header />
			<Inputs />
			<ToDoList />
		</div>
	);
}