import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    
    return <div className='flex items-center w-20'>
        welcome {user.username}
    </div>
}

export default Profile
