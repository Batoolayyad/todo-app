import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { If, Else, Then } from 'react-if';
import { Button, Icon, Label } from "@blueprintjs/core";
import "@blueprintjs/core";
const SignUp = () => {
	const contextType = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function changeUsername(e) {
		setUsername(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	
	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		contextType.signup(email, username, password, role);
	}

	return (
		<If condition={contextType.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				<div className="login">

					<div className="loginBox">
						<div style={{ float: 'right', display: "inline-block", width: '40%', justifyItems: 'center', marginTop: '20px' }}>
							<h2 style={{ color: 'rgb(11,26,50)' }} >TO-DO</h2><h4 style={{ color: 'rgb(11,26,50)' }} >Sign up</h4>
						</div>
						<form onSubmit={handleSubmitSignup} style={{ float: 'left', display: "inline-block", width: '60%' }}>
							<Label className="bp3-label" style={{ margin: '20px' }}>
								<span className="bp3-text-muted">User name</span>
								<input className="bp3-input" type="text" name="username" placeholder="Enter Username" onChange={changeUsername}
								/>
							</Label>

							<Label className="bp3-label" style={{ margin: '20px' }} >
								<span className="bp3-text-muted">Password</span>
								<input className="bp3-input" type="password" name="password" placeholder="Enter password" onChange={changePassword} />
							</Label>

							<div className="bp3-html-select .bp3-large" style={{ alignSelf: 'center', width: '150px', margin: '20px' }}>
								<select name="roles" id="roles" onChange={handleChangeRole} >
									<option value="user">user</option>
									<option value="editor" >editor</option> <option value="admin">admin</option>
								</select>
								<span ><Icon icon="double-caret-vertical" /></span>
							</div>
							<br></br>
							<button style={{ alignSelf: 'center', width: '150px', margin: '20px' }}>SignUp</button>
						</form>
					</div>
				</div>

			</Else>
		</If>
	);
};

export default SignUp;


