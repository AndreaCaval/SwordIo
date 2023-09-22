import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Navigation from "./routes/navigation/navigation.component";
import Nft from './routes/nft/nft.component';
import Retailer from './routes/retailer/retailer.component';
import Sneakers from './routes/sneakers/sneakers.component';
import Tools from './routes/tools/tools.component';
import Profiles from './routes/profiles/profiles.component';
import Settings from './routes/settings/settings.component';

import { selectCurrentUser } from "./redux/user/user.selector";

const App = () => {
  const navigate = useNavigate()

  const currentUser = useSelector(selectCurrentUser)
  
  useEffect(() => {
    if (currentUser === null)
      navigate('/auth')
  }, [currentUser])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='nft/*' element={<Nft />} />
        <Route path='retailer/*' element={<Retailer />} />
        <Route path='sneakers/*' element={<Sneakers />} />
        <Route path='tools' element={<Tools />} />
        <Route path='profiles' element={<Profiles />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
