import  { Header } from './site/Header';
import  { Dashboard } from './site/Dashboard';
import  { Footer } from './site/Footer';
import { Schedule } from './site/Schedule';

export function App() {
	return (  
		<div>
			<Header />
			<Schedule />
			<Dashboard />
			<Footer />
		</div>
	);
}