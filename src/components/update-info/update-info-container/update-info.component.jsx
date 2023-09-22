import { UpdateInfoContainer } from "./update-info.styles"
import EXTLogo from '../../../assets/sword.ico';


const UpdateInfo = () => {
    return (
        <UpdateInfoContainer>
            <img src={EXTLogo} alt="" />
            <div>
                <h3>Update 2.0</h3>
                <ul>
                    <li>Added Kith EU</li>
                    <li>Added ByPass LVR</li>
                    <li>Minor fixes</li>
                </ul>
                <p>more info {'->'}</p>
            </div>
        </UpdateInfoContainer>
    )
}

export default UpdateInfo