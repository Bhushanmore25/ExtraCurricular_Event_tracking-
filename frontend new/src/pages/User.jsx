import React, { useEffect, useState } from 'react';
import UserNavbar from '../components/UserNavbar'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import DataTable from "../components/DataTable"
import Cookies from 'js-cookie';
const User = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = Cookies.get('token');
    setToken(storedToken);

  }, []);
  return (
    <>
       {token && <> <UserNavbar/>
        <div className='flex flex-row justify-between'>
          <div>
            <Profile/>
            <Sidebar/>
          </div>
          <div className='mt-32 mr-16'>
            <DataTable/>
          </div>
        </div></>}
    </>
  )
}

export default User