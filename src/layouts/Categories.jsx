import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Route } from "react-router";
import { NavLink } from 'react-router-dom';
export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                

        <Menu.Item
          name='AnaSayfa'
          as={NavLink} to="/"
        /> 
        <Menu.Item
          name='Sepet'
          as={NavLink} to="/Cart"
        />
        <Menu.Item
          name='friends'
          as={NavLink} to="/"
        />
      </Menu>
        </div>
    )
}
