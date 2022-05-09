import React from 'react';  
import axios from 'axios';  
import "./AddCustomer.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addcustomer extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    CustomerId:'',  
Name:'',  
Country:'',    
}  
}   
Addcustomers=()=>{  
  axios.post('https://localhost:44302/api/Customers', 
  {CustomerId:this.state.CustomerId,Name:this.state.Name,  
  Country:this.state.Country})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Customerlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Customerlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Customer Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="cid" sm={2}>CID</Label>  
          <Col sm={10}>  
            <Input type="text" name="cid" onChange={this.handleChange} value={this.state.CustomerId} placeholder="Enter ID" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Name" sm={2}>NAME</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.CName} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Country" sm={2}>COUNTRY</Label>  
          <Col sm={10}>  
            <Input type="text" name="Country" onChange={this.handleChange} value={this.state.Country} placeholder="Enter Country" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addcustomers} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addcustomer;  