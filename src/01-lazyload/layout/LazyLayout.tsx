import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { activeLink } from '../../utils/activeLink';
import LazyPage1 from '../pages/LazyPage1';
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3';

export function LazyLayout() {
    return (
        <div>
            <h1>Lazy Layout</h1>

            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => activeLink(isActive)}
                        to='lazy1'
                    >
                        Lazy 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => activeLink(isActive)}
                        to='lazy2'
                    >
                        Lazy 2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => activeLink(isActive)}
                        to='lazy3'
                    >
                        Lazy 3
                    </NavLink>
                </li>

                <Routes>
                    <Route
                        path='lazy1'
                        element={<LazyPage1 />}
                    />

                    <Route
                        path='lazy2'
                        element={<LazyPage2 />}
                    />

                    <Route
                        path='lazy3'
                        element={<LazyPage3 />}
                    />

                    <Route
                        path='*'
                        element={
                            <Navigate
                                to='lazy1'
                                replace
                            />
                        }
                    />
                </Routes>
            </ul>
        </div>
    );
}

export default LazyLayout;
