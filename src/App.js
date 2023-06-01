import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import PartnerContainer from './components/PartnerContainer';
import ApplyAI from './components/ApplyAI';
import AwardsContainer from './components/AwardsContainer';
import WhatOur from './components/WhatOur';
import Footer from './components/Footer';



function App() {
  return (
    <>

    <div className="wrapper">
      <Navbar/>
    </div>

    <Introduction/>

    <PartnerContainer />

    <ApplyAI />

    <AwardsContainer/>

    <WhatOur/>

    <div className='foot'>
      <Footer/>
    </div>

    </>
  );
}
export default App;
