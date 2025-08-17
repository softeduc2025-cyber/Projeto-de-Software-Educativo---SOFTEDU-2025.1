import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Home, SignIn } from './pages'
import { AppRoutes } from './utils/routes';

function App() {
  return (
    <Routes>
      <Route
        path={AppRoutes.home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route path={AppRoutes.signIn} element={<SignIn />} />
    </Routes>
  )
}

export default App
