import React from 'react'
import CreateEvent from '../components/CreateEvent'
import OrganizerProfile from '../components/OrganizerProfile'
import UserNavbar from '../components/UserNavbar'

const OrganizeEvent = () => {
  return (
    <>
        <UserNavbar/>
        <div className='flex flex-row justify-between'>
            <div className=''>
                <OrganizerProfile/>
            </div>
            <div className='mt-5 mr-16'>
                <CreateEvent/>
            </div>
        </div>
    </>
  )
}

export default OrganizeEvent