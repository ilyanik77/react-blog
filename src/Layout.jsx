import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({posts, search, setSearch}) => {
  return (
		<div className='App'>
			<Header title='My Blog' />
			<Nav search={search} setSearch={setSearch} />
			<Outlet />
			<Footer title='My Blog' />
		</div>
	)
}

export default Layout