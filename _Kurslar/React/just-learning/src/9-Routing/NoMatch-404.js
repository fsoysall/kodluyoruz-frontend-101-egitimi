import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

export default 
function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          İlgili Link / Sayfa <code>{location.pathname}</code> BULUNAMADI !
        </h3>
      </div>
    );
  }