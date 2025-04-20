import { Route, Routes } from "react-router"
import BaseLayout from "./components/layout/BaseLayout"
import Home from "./components/basePages/Home"
import AuthLayout from "./components/layout/AuthLayout"
import SignIn from "./components/authPages/SignIn"
import SignUp from "./components/authPages/SignUp"
import PasswordReset from "./components/authPages/PasswordReset"
import ChangePassword from "./components/authPages/ChangePassword"
import CheckMail from "./components/authPages/CheckMail"
import Varification from "./components/authPages/Varification"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {/* renders into the outlet in <Root> at "/" */}
          <Route index element={<Home />} />

          <Route path="/" element={<AuthLayout />}>
            {/* renders into the outlet in <Dashboard> at "/dashboard" */}
            <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_Up" element={<SignUp />} />
            <Route path="password_reset" element={<PasswordReset />} />
            <Route path="password_change" element={<ChangePassword />} />
            <Route path="check_mail" element={<CheckMail />} />
            <Route path="verify_code" element={<Varification />} />
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
