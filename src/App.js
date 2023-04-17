import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

function App() {
  return (
    <>
      <ToastContainer />
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route
                path="/home"
                element={
                  <ProtectedRouteGuard>
                    <HomePage/>
                  </ProtectedRouteGuard>
                }
              >
                <Route index path="*" element={<Navigate to="/home" />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
    </>
  );
}

export default App;

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}