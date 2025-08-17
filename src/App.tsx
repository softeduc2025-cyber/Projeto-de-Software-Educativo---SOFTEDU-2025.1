import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Home, SignIn } from './pages'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
