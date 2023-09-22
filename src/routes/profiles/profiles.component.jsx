import './profiles.styles'
import Profile from '../../components/profile/profile-container/profile.component'

const Profiles = () =>{
    return(
        <div className='outlet-container'>
            <Profile category={"profiles"} />
        </div>
    )
}

export default Profiles