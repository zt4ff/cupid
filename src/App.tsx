import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { PATHS } from "./utils";
import { Profile } from "./pages/profile";
import { Matches } from "./pages/matches";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";
import { TopNavigation } from "./components/TopNavigation";
import { Login } from "./pages/login";
import PrivateRoute from "./components/ProtectedRoutes";
import AuthProvider from "./utils/contexts/AuthContext";
import { Register } from "./pages/register";
import { CreateProfile } from "./pages/create-profile";

function App() {
  const matchesData = [
    {
      id: 1,
      title: "24yo | Bartender | Berlin",
      message: "Chat-Date on Friday at 18:30, 29.09.2024",
    },
  ];

  return (
    <BrowserRouter>
      <AuthProvider>
        <TopNavigation />
        <Container maxWidth="sm">
          <Routes>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path={PATHS.PROFILE} element={<Profile />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route
                path={PATHS.MATCHES}
                element={<Matches data={matchesData} />}
              />
            </Route>

            <Route element={<PrivateRoute withUserProfile={false} />}>
              <Route path={PATHS.CREATE_PROFILE} element={<CreateProfile />} />
            </Route>

            {/* Public Routes */}
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.REGISTER} element={<Register />} />
          </Routes>
        </Container>
        <BottomNavigation />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
