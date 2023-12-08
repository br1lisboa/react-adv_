import {
    BrowserRouter,
    NavLink,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import G from '../assets/Google__G__logo.svg.png';
import { activeLink } from '../utils/activeLink';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';

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
                                    to='/lazy1'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    lazy 1
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/lazy2'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    lazy 2
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/lazy3'
                                    className={({ isActive }) =>
                                        activeLink(isActive)
                                    }
                                >
                                    lazy 3
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route
                            path='/lazy1'
                            element={<LazyPage1 />}
                        />
                        <Route
                            path='/lazy2'
                            element={<LazyPage2 />}
                        />
                        <Route
                            path='/lazy3'
                            element={<LazyPage3 />}
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
