import { ThemeProvider } from "@mui/material"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { HomePage, MapPage, NotFoundPage, NotificationsPage, SettingsPage } from "./pages"
import Login from "./pages/Login"
import './scss/App.scss'
import theme from "./styles/theme"
import { useAppSelector } from "./app/hooks"
import { selectUser } from "./features/User/userSlice"

const App = () => {
  const user = useAppSelector(selectUser)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user.isLogged ? <MainLayout /> : <Navigate to='/login' />}>
            <Route index element={<HomePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App