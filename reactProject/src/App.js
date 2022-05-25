import Main from "./components/Main";
import Header from "./components/Header/Header";
import { GlobalStyle } from './style/style';

export function App() {
	return (  
		<div className="container">
			<GlobalStyle />
			<Header />
			<Main />
		</div>
	);
};