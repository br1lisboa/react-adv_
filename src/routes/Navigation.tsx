import {
    BrowserRouter,
    NavLink,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import G from '../assets/Google__G__logo.svg.png';
import { activeLink } from '../utils/activeLink';
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';

function Navigation() {
    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img
                            src={G}
                            alt='Logo de G'
                            width={200}
                            style={{ paddingTop: 20 }}
                        />

                        <ul>
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    Shopping
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/users'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route
                            path='/'
                            element={<ShoppingPage />}
                        />
                        <Route
                            path='/about'
                            element={<h1>About</h1>}
                        />
                        <Route
                            path='/users'
                            element={<h1>Users</h1>}
                        />

                        <Route
                            path='*'
                            element={<Navigate to='/' />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Navigation;
