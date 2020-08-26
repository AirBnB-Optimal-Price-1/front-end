import React from "react";
import { Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import PrivateRoute from "../utils/PrivateRoute";
import UserProfile from "./userprofile";
import HostHome from "./hostHome";
import EditHome from "./editHome";
import ListingPage from "./listingPage";
import ListingPageInd from "./listingPageInd";
import { PropertyProvider } from "../ContextApi/propertiesContext";

const Routes = () => {
  return (
    <PropertyProvider>
      <>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/userprofile/:id" component={UserProfile} />
        <PrivateRoute
          exact
          path="/userprofile/:id/add-home"
          component={HostHome}
        />
        <PrivateRoute
          exact
          path="/userprofile/:id/edit-home"
          component={EditHome}
        />
        <PrivateRoute exact path="/listing-page" component={ListingPage} />
        <PrivateRoute
          exact
          path="/listing-page/:id"
          component={ListingPageInd}
        />
      </>
    </PropertyProvider>
  );
};
export default Routes;
