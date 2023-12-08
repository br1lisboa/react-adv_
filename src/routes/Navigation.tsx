import { Suspense } from 'react';
import {
    BrowserRouter,
    NavLink,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import G from '../assets/Google__G__logo.svg.png';
import { activeLink } from '../utils/activeLink';
import { routes2 } from './routes';

function Navigation() {
    return (
        <>
            <Suspense fallback={null}>
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
                                {routes2.map(({ name, to }) => (
                                    <li key={name}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) =>
                                                activeLink(isActive)
                                            }
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <Routes>
                            {routes2.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />}
                                />
                            ))}

                            <Route
                                path='*'
                                element={
                                    <Navigate
                                        to={routes2[0].to}
                                        replace
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Navigation;
