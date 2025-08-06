import { useEffect, useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';
import { ProductsPage } from './pages/ProductsPage';

import type { IUserWithTokens } from './models/IUserWithTokens';
import { isExpired } from './services/token.service';

export const App = () => {
  const [user, setUser] = useState<IUserWithTokens | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (!parsed.accessToken || isExpired(parsed.accessToken)) {
      localStorage.removeItem('user');
      return;
    }

    setUser(parsed);
  }, []);

  // 👇 Оборачиваем роутер в useMemo, чтобы он обновлялся при изменении user
  const router = useMemo(() =>
      createBrowserRouter([
        {
          path: '/',
          element: <MainLayout user={user} setUser={setUser} />,
          children: [
            {
              index: true,
              element: user ? <HomePage user={user} /> : <Navigate to="/login" replace />,
            },
            {
              path: 'login',
              element: <LoginPage onLoginSuccess={setUser} />,
            },
            {
              path: 'auth/users',
              element: user ? <UsersPage /> : <Navigate to="/login" replace />,
            },
            {
              path: 'auth/products',
              element: user ? <ProductsPage /> : <Navigate to="/login" replace />,
            },
          ],
        },
      ]), [user]
  );

  return <RouterProvider router={router} />;
};

