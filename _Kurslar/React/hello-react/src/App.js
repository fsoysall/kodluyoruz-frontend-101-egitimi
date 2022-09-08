// import logo from './logo.svg';

import './App.css';
import { Header /* ,  Ba2 HHeader,  HHeader2 */ } from './ComponentS/header';


import Userr from './ComponentS/User';
import User from './ComponentS/User';

function App() {
  var msg = "Selamm2";
  var friends = [
    { Id: 0, name: "Ahmet" },
    { Id: 1, name: "tayfun" },
    { Id: 2, name: "leyla" },
    { Id: 3, name: "fatma" },
    { Id: 4, name: "görkem" },
  ];

  var u = <User Nameo="Yalnız" Surname="Rüzgar" Age={29}
    IsLoggedIn={1} MyFriends={friends}
    address={{ title: "Home", zip: "123" }} />;

  return (
    <>
      <Header />
      APP.JS 2<br />
      {u}
      <hr />
      {`${msg} Sana Ey Bad-ı Saba`}

    </>
  );
}

export default App;


