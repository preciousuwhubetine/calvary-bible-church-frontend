import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

import Homepage from "../application/views/Homepage/Homepage"
import _404 from "../application/views/404/404"

export default function Config () {
  const location = useLocation();
  const session = useSelector((state) => state.session)
  const [redirectURL, setRedirectURL] = useState(new URLSearchParams(window.location.search).get('redirect') || '/profile');

  useEffect(() => {
    setRedirectURL(new URLSearchParams(window.location.search).get('redirect') || '/profile');
  }, [location.pathname]);

  return (
    <Routes>
      {
        // session.active && (
        //   <>
        //     <Route path="/register" element={<Navigate to={redirectURL} />} />
        //     <Route path="/login" element={<Navigate to={redirectURL} />} />
        //   </>
        // )
      }

      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<_404 />} />
    </Routes>
  )
}
