import React,{useState,useEffect} from 'react';
import { Outlet, useLocation,useNavigate } from 'react-router-dom';
import { Layout, message } from 'antd';
import Sidebar from './component/SideBar.jsx';


const { Content } = Layout;

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo] = useState(location.state || {});
  const [userData,setUserDate]=useState(getUserData(userInfo));

  useEffect(() => {
    if (!userInfo.username) {
      message.error('Please login first');
      navigate('/login');
    }
    setUserDate(getUserData(userInfo));
    console.log("welcome to home page",userData);
  }, []);


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar userInfo={userData}/>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}


function getUserData(userInfo){
  const {username} = userInfo;

  return {
    userName: username,
    userAvatar: null,
    userProjects:[
      {title:'project1',id:123},
      {title:'project2',id:234},
    ],
    otherProjects:[
      {title:'project2',id:234},
      {title:'project3',id:345},
    ],
  }


}



export default HomePage;