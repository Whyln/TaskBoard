import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import DefaultPage from './page/Default.jsx';
import AboutPage from './page/About.jsx';
import FriendCenter from './page/FriendCenter.jsx';
import NewProjectPage from './page/NewProject.jsx';
import PersonalCenter from './page/PersonalCenter.jsx';
import ProjectBoard from './page/ProjectBoard.jsx';
import TaskBoard from './page/TaskBoard.jsx';
function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage/>} index />
        <Route path="/home/*" element={<HomePage/>} >
            <Route path='about' element={<AboutPage />} />
            <Route path='friend-center' element={<FriendCenter />} />
            <Route path='new-project' element={<NewProjectPage />} />
            <Route path='personal-center' element={<PersonalCenter />} />
            <Route path='project-board' element={<ProjectBoard />} />
            <Route path='task-board' element={<TaskBoard />} />
            <Route path="" element={<DefaultPage />} />
            <Route path="*" element={<NotFoundPage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );

}

export default App;

function NotFoundPage() {
  return (
    <div>
      <h1 className='text-4xl text-center'>404 Not Found</h1>
    </div>
  );
}