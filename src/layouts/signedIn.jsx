import React from 'react'
import { Dropdown,Menu,Image } from 'semantic-ui-react'

export default function signedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/196338725_4375151352508459_3541704731895671195_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=CY9j_oo0z8kAX8LKxwh&_nc_oc=AQn-8UuUNIDqCHaGQR5T-EFDwFsInHhIbiDRhpckusAefXVJEknEDNdxAuBg5bmI0H0&_nc_ht=scontent-vie1-1.xx&oh=cee02826ccb28f19116bce554831af9c&oe=60E8D83A">

                </Image>
                <Dropdown pointing="top left" text="SMTcoder" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                    </Dropdown>
            </Menu.Item>

        </div>
    )
}
