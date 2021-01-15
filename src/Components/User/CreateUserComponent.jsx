import React, { Component } from 'react';
import UserService from '../../Services/UserService';
import './Style/LoginUserComponentStyle.css';


class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                userName:'',
                password:'',
                role:'',
            }

            this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
            this.changePasswordHandler = this.changePasswordHandler.bind(this);
            this.changeRoleHandler = this.changeRoleHandler.bind(this);
            this.saveUser = this.saveUser.bind(this);

        }
        saveUser = (e)=>{
            e.preventDefault();
            let user ={ 
                id: null, userName: this.state.userName, 
                password: this.state.password,
                role: this.state.role
            };

            console.log(JSON.stringify(user));
            UserService.createUser(user).then(res =>{
            this.props.history.push('/user');
            })
         }  

            
        cancel(){
            this.props.history.push('/user');
        }

        changeUserNameHandler = (event) =>{
            this.setState({userName: event.target.value});
        }
    
        changePasswordHandler = (event) =>{
            this.setState({password: event.target.value});
        }
    
        changeRoleHandler = (event) =>{
            this.setState({role: event.target.value});
        }

        render() {
            return (
                    <div className="container">
               
                        <div className="row">                            
                            <div class="register" className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"><i class="fas fa-users"></i>Registration</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className="form-group"> 
                                            <label><b>Enter User Name:</b></label>
                                            <input placeholder="User Name" name="userName"
                                                className="form-control" value = {this.state.userName} 
                                                onChange = {this.changeUserNameHandler}/>
                                        </div>
                                        
                                        <div className="form-group"> 
                                            <label><b>Enter Password:</b></label>
                                            <input placeholder="Password" name="password"
                                                className="form-control" value = {this.state.password} 
                                                onChange = {this.changePasswordHandler}/>
                                        </div>
                                        <div className="form-group"> 
                                        <label><b>Choose Role:</b></label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Admin"
                                            checked={this.state.role === "Admin"}
                                            onChange={this.changeRoleHandler}/>Admin
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                            <input type="radio"value="User"
                                            checked={this.state.role === "User"}
                                            onChange={this.changeRoleHandler}/>User
                                            </label>
                                         </div>
                                    </div>

                               
                                    <button className = "btn btn-success" onClick = {this.saveUser} style = {{marginLeft: "20px"}}><i class="fas fa-user-plus"></i>&nbsp;Register</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "140px"}}><i class="far fa-times-circle"></i>&nbsp;Cancel</button>
                                    </form>
                                </div>
                            </div>
                         </div>
                     </div>
                //  </div>
                //  </div>
                );
             }
}

export default CreateUserComponent;
    