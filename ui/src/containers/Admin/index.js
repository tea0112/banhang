import React from 'react';
import './Admin.scss';
import { Route, Switch } from 'react-router-dom';
import UserAdmin from './UserAdmin';
import AddCatagory from './CatagoryAdmin/AddCatagory';
import UpdateCatagory from './CatagoryAdmin/UpdateCatagory';
import DeleteCatagory from './CatagoryAdmin/DeleteCatagory';

const Admin = () => {
  return (
    <>
      <Switch>
        <Route path="/admin/user" exact>
          <UserAdmin />
        </Route>
        <Route path="/admin/catagory/add" exact>
          <AddCatagory />
        </Route>
        <Route path="/admin/catagory/update" exact>
          <UpdateCatagory />
        </Route>
        <Route path="/admin/catagory/delete" exact>
          <DeleteCatagory />
        </Route>
      </Switch>
    </>
  );
};

export default Admin;
