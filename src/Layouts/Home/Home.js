// import User from '../Pages/User/User';
import NewSongs from './Newsongs';
import Hotsongs from './Hotsongs';
import Listsongs from './Listsongs';
import MyService from "../../components/MyService/MyService";
// import Audio from '../Audio/Audio';




const Home = () => {
    return ( 
        <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
          <NewSongs/>
           <Hotsongs/>
           <hr className='w-4/5 bg-gray-700 mx-auto'/>
            <Listsongs/>
            <MyService/>
            {/* <Audio/> */}
        </div>
     );
}
 
export default Home;