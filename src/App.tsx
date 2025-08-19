import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Home, SignIn, SignUp } from './pages'
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

      <Route path={AppRoutes.signUp} element={<SignUp />} />
      <Route path={AppRoutes.signIn} element={<SignIn />} />
    </Routes>
  )
}

export default App
