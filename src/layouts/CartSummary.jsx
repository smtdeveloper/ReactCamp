import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Dropdown } from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
           <Dropdown item text='Sepet'>
            <Dropdown.Menu>
              <Dropdown.Item>Monster</Dropdown.Item>
              <Dropdown.Item>MSİ</Dropdown.Item>
              <Dropdown.Item>hp</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/cart" > Sepete Git </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
