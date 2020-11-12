import React from "react";
import { Image, Container, Item, ItemDescription } from "semantic-ui-react";

export default function SignIn() {
	return (
		
<div className="Sign-In">
     <form className="content-block">
        <form class="ui fluid form">  
            <div className="Login-For-Members">
            <label >Login for members</label>
            </div>
         
        <div class="inline field">
            <label htmlFor="Username">Username</label> 
            <input type="text" placeholder="Username"/>   
        </div>
        <div class="inline field">  
        <label htmlFor="Username">Password</label> 
            <input type="password" placeholder="Password"/>
        </div>
        <div className="Forget-Username-Password">  
        <label >Forget Username/Password</label> 
        </div>
        <div className="Rectangle-25">
            <label className="Login">Login</label>
        </div>
        </form>    
    </form>  
</div>  
	);
}
