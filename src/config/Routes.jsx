import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

import _404 from "../application/views/404/404"
import AboutPage from "../application/views/AboutPage/AboutPage"
import CounsellingPage from "../application/views/CounsellingPage/CounsellingPage"
import EventsPage from "../application/views/EventsPage/EventsPage"
import HomePage from "../application/views/Home/Home"
import GivePage from "../application/views/GivePage/GivePage"
import GroupsPage from "../application/views/GroupsPage/GroupsPage"
import HouseFelllowshipPage from "../application/views/HouseFellowshipPage/HouseFellowshipPage"
import LeadershipPage from "../application/views/LeadershipPage/LeadershipPage"
import LivestreamPage from "../application/views/LivestreamPage/LivestreamPage"
import MarriageClass from "../application/views/MarriageClass/MarriageClass"
import MaturityClass from "../application/views/MaturityClass/MaturityClass"
import MembershipClass from "../application/views/MembershipClass/MembershipClass"
import MinisterialClass from "../application/views/MinisterialClass/MinisterialClass"
import MissionsClass from "../application/views/MissionsClass/MissionsClass"
import NewPage from "../application/views/NewPage/NewPage"
import NewConvertPage from "../application/views/NewConvertPage/NewConvertPage"
import NewMemberPage from "../application/views/NewMemberPage/NewMemberPage"
import PastSermonsPage from "../application/views/PastSermonsPage/PastSermonsPage"
import StorePage from "../application/views/StorePage/StorePage"
import StorePageCategories from "../application/views/StorePage/StorePageCategories/StorePageCategories"
import StorePageCategory from "../application/views/StorePage/StorePageCategory/StorePageCategory"
import StudyPage from "../application/views/StudyPage/StudyPage"

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

      <Route path="/about" element={<AboutPage />} />
      <Route path="/counselling" element={<CounsellingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/house-fellowship" element={<HouseFelllowshipPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/live" element={<LivestreamPage />} />
      <Route path="/maturity-class" element={<MaturityClass />} />
      <Route path="/marriage-class" element={<MarriageClass />} />
      <Route path="/membership-class" element={<MembershipClass />} />
      <Route path="/ministerial-class" element={<MinisterialClass />} />
      <Route path="/missions" element={<MissionsClass />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/new-member" element={<NewMemberPage />} />
      <Route path="/new-convert" element={<NewConvertPage />} />
      <Route path="/past-sermons" element={<PastSermonsPage />} />
      <Route path="/store" element={<StorePage />}>
        <Route path="/store" element={<StorePageCategories />} />
        <Route path="/store/category/:categoryId/:categoryName" element={<StorePageCategory />} />
      </Route>
      <Route path="/study" element={<StudyPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<_404 />} />
    </Routes>
  )
}
