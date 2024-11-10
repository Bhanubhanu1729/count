import React from "react";

class MultipleValuesinForm extends React.Component{

    constructor(){
        super();

        this.state = {UserName : ' ',Password:' ',City:' ',State:' '};

        // When you define a method inside a React class component, it does not automatically bind the this keyword to the instance of the class. This means that when the method is called (e.g., by an event like onChange), this inside the method does not automatically point to the component instance. This would lead to errors when you try to access this.state or this.setState().
        // Binding ensures that this inside the method refers to the component instance, so you can access the component's state and call setState properly.

        this.UserUpdate = this.UserUpdate.bind(this)
        this.userSubmit = this.userSubmit.bind(this)

    }
    UserUpdate(event){
        this.setState({[event.target.name]:event.target.value})
    }
    userSubmit(event){
      // method is used to prevent the default behavior of an event in JavaScript. When it's called inside an event handler, it stops the browser’s default action for that event
      event.preventDefault();
      alert("Successfuly submited ") 
    }

    render(){
        return(
            <div>
                <form onSubmit={this.userSubmit}>
                    Enter UserName :<input type='text' name="username" value={this.setState.UserName} onChange={this.UserUpdate}/><br/> 
                    Enter Password :<input type='text' name="password" value={this.setState.Password} onChange={this.UserUpdate}/><br/> 
                    Enter City :<input type='text' name="city" value={this.setState.City} onChange={this.UserUpdate}/><br/>  
                    Enter State :<input type='text' name="state" value={this.setState.State} onChange={this.UserUpdate}/><br/> 
                    <button value="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}
export default MultipleValuesinForm;