import Main from './pages/Main.tsx';
import Links from './pages/Links.tsx';
import Layout from './pages/Layout.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout/>}>
						<Route index element={<Main />} />
						<Route path='links' element={<Links />} />
						<Route path='*' element={<div>no page found 404</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
