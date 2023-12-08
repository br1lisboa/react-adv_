import { lazy, LazyExoticComponent } from 'react';
import { NoLazyLoad } from '../01-lazyload/pages/NoLazyLoad';

type JSXComponent = () => JSX.Element;

interface Routes {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Routes[] = [
    {
        to: '/lazy-page-1',
        path: 'lazy-page-1',
        Component: Lazy1,
        name: 'Lazy Page 1',
    },
    {
        to: '/lazy-page-2',
        path: 'lazy-page-2',
        Component: Lazy2,
        name: 'Lazy Page 2',
    },
    {
        to: '/lazy-page-3',
        path: 'lazy-page-3',
        Component: Lazy3,
        name: 'Lazy Page 3',
    },
];

const LazyNested1 = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes2: Routes[] = [
    {
        to: '/lazy-nested-1/',
        path: '/lazy-nested-1/*',
        Component: LazyNested1,
        name: 'Lazy Nested 1',
    },
    {
        to: '/no-lazy-nested',
        path: 'no-lazy-nested',
        Component: NoLazyLoad,
        name: 'No Lazy Nested',
    },
];
