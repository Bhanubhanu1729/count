import React from "react";

class UserForm extends React.Component
{
  constructor()
  {
    super();

    this.state = {Username :' '};
  }  
  updateUser=(event)=>{
    this.setState({ Username: event.target.value });
  }
  render (){
    return(
        <div>
            <form>
                Enter Username : <input type = "text" name="username" value={this.state.Username} onChange={this.updateUser}/>
                <h1>{this.state.Username}</h1>
            </form>
        </div>
    )
  }
}
export default UserForm;