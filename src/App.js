import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
import { VscHome, VscHeart, VscExtensions, VscBeaker, VscCircuitBoard, VscDebugDisconnect, VscGitMerge } from 'react-icons/vsc';

import api from './api';
import Header from './components/Header';
import Videos from './components/Videos';
import './style.scss';

/*
<section className='list'>
	{movieList.map((item, key) => (
		<MvRow key={key} title={item.title} items={item.items} />
	))}
</section>
 */

function App() {
	const [movieList, setMovieList] = useState([]);
	const iconSize = 23;

	useEffect(() => {
		const loadAll = async () => {
			let list = await api.getHomeList();
			setMovieList(list);
		}

		loadAll();
	}, []);

	return (
		<div className="app">
			<Header />
	
			<Router>
				<div className='sidebar'>
					<nav>
						<div className='sidebar-elements'>
							<div className='element'>
								<NavLink
									to='/'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscHome size={iconSize} />
									<p>Início</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/follow'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscHeart size={iconSize} />
									<p>Seguindo</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/feat'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscExtensions size={iconSize} />
									<p>Featured</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscGitMerge size={iconSize} />
									<p>Pop Culture</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscDebugDisconnect size={iconSize} />
									<p>Música</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscCircuitBoard size={iconSize} />
									<p>Artists</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscBeaker size={iconSize} />
									<p>Education</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscExtensions size={iconSize} />
									<p>Games</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscHeart size={iconSize} />
									<p>Universe</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscDebugDisconnect size={iconSize} />
									<p>Tech</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscGitMerge size={iconSize} />
									<p>Política</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscExtensions size={iconSize} />
									<p>Finanças 2.0</p>
								</NavLink>
							</div>

							<div className='element'>
								<NavLink
									to='/nowhere'
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									<VscBeaker size={iconSize} />
									<p>Velho Oeste</p>
								</NavLink>
							</div>
						</div>
					</nav>
				</div>

				<div className='content-area'>
					<Routes>
						<Route path='/' element={<Videos movieList={movieList} />} />
						<Route path='/feat' element={<Videos movieList={[]} />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
