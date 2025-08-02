import React from 'react'
import OrganizerProfile from '../components/OrganizerProfile'
import UserNavbar from '../components/UserNavbar'
import AllOrganizersEvent from '../components/AllOrganizersEvent'

const Oragnizer = () => {
  return (
    <>
        <UserNavbar/>
        <div className='flex flex-row justify-between'>
          <div>
          <OrganizerProfile/>
          </div>
          <div className='mt-32 mr-16'>
            <AllOrganizersEvent/>
          </div>
        </div>
        
    </>
  )
}

export default Oragnizer