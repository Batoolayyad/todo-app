import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";



function Header() {
    return (
        <Navbar style={{backgroundColor:'rgb(235,241,245)'}}>
            <Navbar.Group >
                <Navbar.Heading>To Do</Navbar.Heading>
                <Navbar.Divider />
                <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
                <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>             </Navbar.Group>
        </Navbar>
    )
}

export default Header