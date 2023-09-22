import Store from '../../components/store/store-container/store-container.component'
import { Routes, Route } from 'react-router-dom';
import StoreSetting from '../store-setting/store-setting.component';

import { useSelector } from 'react-redux';
import { selectStoresListMap } from '../../redux/storeslist/storeslist.selector';

const Sneakers = () => {

    const storesListMap = useSelector(selectStoresListMap)

    return (
        <div className='outlet-container'>
            <Routes>
                <Route index element={<Store category={"sneakers"} stores={storesListMap.sneakers} />} />
                <Route path=':storesetting' element={<StoreSetting />} />
            </Routes>
        </div>
    )
}

export default Sneakers