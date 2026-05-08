import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import StudentRegistration from './pages/StudentRegistration'
import Dashboard from './pages/Dashboard'
import EnrollmentSubmitted from './pages/EnrollmentSubmitted'
import TeacherRegistration from './pages/TeacherRegistration'
import TeacherEnrollmentSubmitted from './pages/TeacherEnrollmentSubmitted'
import AdminRegistration from './pages/AdminRegistration'
import AdminEnrollmentSubmitted from './pages/AdminEnrollmentSubmitted'
import EnrollmentComingSoon from './pages/EnrollmentComingSoon'
import BookMaker from './pages/BookMaker'
import MusicLibraryPage from './pages/music-library/MusicLibraryPage'

/** Wraps all pages so flex-1 fills space between global Header and Footer. */
const MainLayout = () => (
  <div className='flex min-h-0 w-full flex-1 flex-col'>
    <Outlet />
  </div>
)

const App = () => {
  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/book-maker' element={<BookMaker />} />
        <Route path='/music-library' element={<MusicLibraryPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/enrollment-submitted' element={<EnrollmentSubmitted />} />
        <Route path='/teacher-application-submitted' element={<TeacherEnrollmentSubmitted />} />
        <Route path='/admin-application-submitted' element={<AdminEnrollmentSubmitted />} />
        <Route path='/professional-development' element={<AdminRegistration />}>
          <Route index element={<Navigate to='identity' replace />} />
          <Route path='identity' element={<AdminRegistration />} />
          <Route path='role' element={<AdminRegistration />} />
          <Route path='ethics' element={<AdminRegistration />} />
          <Route path='data-protection' element={<AdminRegistration />} />
          <Route path='security' element={<AdminRegistration />} />
          <Route path='oath' element={<AdminRegistration />} />
          <Route path='documents' element={<AdminRegistration />} />
          <Route path='signature' element={<AdminRegistration />} />
        </Route>
        <Route path='/graduate' element={<TeacherRegistration />}>
          <Route index element={<Navigate to='personal' replace />} />
          <Route path='personal' element={<TeacherRegistration />} />
          <Route path='professional' element={<TeacherRegistration />} />
          <Route path='teaching' element={<TeacherRegistration />} />
          <Route path='ip-agreement' element={<TeacherRegistration />} />
          <Route path='background' element={<TeacherRegistration />} />
          <Route path='constitution' element={<TeacherRegistration />} />
          <Route path='documents' element={<TeacherRegistration />} />
          <Route path='signature' element={<TeacherRegistration />} />
        </Route>
        <Route
          path='/online-learning'
          element={<EnrollmentComingSoon headline='Religious Leader Enrollment' />}
        />
        <Route
          path='/research'
          element={<EnrollmentComingSoon headline='Community Leader Enrollment' />}
        />
        <Route
          path='/international'
          element={<EnrollmentComingSoon headline='Political Representative Enrollment' />}
        />
        <Route path='/undergraduate' element={<StudentRegistration />}>
          <Route index element={<Navigate to='age-category' replace />} />
          <Route path='age-category' element={<StudentRegistration />} />
          <Route path='constitution' element={<StudentRegistration />} />
          <Route path='safety' element={<StudentRegistration />} />
          <Route path='technology' element={<StudentRegistration />} />
          <Route path='identity' element={<StudentRegistration />} />
          <Route path='academics' element={<StudentRegistration />} />
          <Route path='astrology' element={<StudentRegistration />} />
          <Route path='verification' element={<StudentRegistration />} />
          <Route path='review' element={<StudentRegistration />} />
        </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
