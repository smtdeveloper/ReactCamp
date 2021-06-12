import React, {useState} from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import CartSummary from './CartSummary';
import SignedIn from './signedIn';
import SigneOut from './SigneOut';
import {  useHistory } from 'react-router-dom';


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSigOut() {
    setIsAuthenticated(false)
  history.push("/")
  }

  function handleSigIn() {
    setIsAuthenticated(true)
  }

    return (
        <div>
           
           <Menu inverted fixed="top">
               <Container>  
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <CartSummary/>
          {isAuthenticated?  <SignedIn signOut={handleSigOut} SMTcoder="1" /> : <SigneOut signIn={handleSigIn}  /> }

          </Menu.Menu>
        </Container>
      </Menu>

        </div>
    )
}
