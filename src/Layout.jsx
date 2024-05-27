import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({posts, search, setSearch}) => {
  return (
		<div className='app'>
			<Header title='My Blog' />
			<Nav search={search} setSearch={setSearch} />
			<Outlet className='app' />
			<Footer title='My Blog' />
		</div>
	)
}

export default Layout