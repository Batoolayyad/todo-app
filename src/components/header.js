import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import Login from './login'


function Header() {
    return (
        <Navbar style={{backgroundColor:'rgb(235,241,245)', margin:'0%'}}>
            <Navbar.Group >
                <Navbar.Heading>To Do</Navbar.Heading>
                <Navbar.Divider />
                <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
                <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>
                 <Login/>
                </Navbar.Group>
        </Navbar>
    )
}

export default Header