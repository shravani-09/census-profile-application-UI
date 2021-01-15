import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import './Style/Style.css';
class ListMemberComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            memberInformation: []
        }
        this.addMemberInformation = this.addMemberInformation.bind(this);
        this.editMemberInformation = this.addMemberInformation.bind(this);
        this.deleteMemberInformation = this.deleteMemberInformation.bind(this);
        this.viewMemberInformation = this.viewMemberInformation.bind(this);
    }
    componentDidMount(){
        MemberService.getMember()
        .then((res) => {
            this.setState({memberInformation: res.data});
        });
    }


    addMemberInformation(){
        this.props.history.push('/add-member');
    }

    editMemberInformation(id){
        this.props.history.push(`/update-member/${id}`)
    }

    deleteMemberInformation(id){
        MemberService.deleteMemberInformation(id).then((res) => {
            this.setState({memberInformation: this.state.memberInformation.filter( memberInformation => memberInformation.id !== id)});
        });
    }

    viewMemberInformation(id){
        this.props.history.push(`/view-member/${id}`);
    }


    render() {
        return (
            <div className="xyz">
                <h2 className="text-center" className="head">Member List</h2>
                <div className="row">
                    <button className="button" onClick={this.addMemberInformation}>Add Member</button>
                </div>
                &nbsp;&nbsp;
                <div className="row">

                    <table className="table table-striped table-bordered table-hover" >
                        <thead>
                            <tr>                                
                                <th>Member Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Educational Details</th>
                                <th>Marital Status</th>
                                <th>Relationship</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.memberInformation.map(
                                    memberInformation => 
                                    <tr key= {memberInformation.id}>
                                        <td>{memberInformation.id}</td>
                                        <td>{memberInformation.firstName}</td>
                                        <td>{memberInformation.lastName}</td>
                                        <td>{memberInformation.age}</td>
                                        <td>{memberInformation.gender}</td>
                                        <td>{memberInformation.dob}</td>
                                        <td>{memberInformation.educationDetails}</td>
                                        <td>{memberInformation.maritalStatus}</td>
                                        <td>{memberInformation.relationship}</td>
                                        <td>
                                            <button onClick = {()=>this.editMemberInformation(memberInformation.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteMemberInformation(memberInformation.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewMemberInformation(memberInformation.id)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }
                    </tbody>

                </table>

            </div>
         </div>
         );
     }
}

export default ListMemberComponent;