import './settings.styles'
import Setting from '../../components/settings/settings-container/settings.component'

const Settings = () =>{
    return(
        <div className='outlet-container'>
            <Setting category={"settings"} />
        </div>
    )
}

export default Settings