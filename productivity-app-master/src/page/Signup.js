import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/base";
import { useEffect, useState } from "react";

const Signup=()=>{
    const [data,setdata]= useState({
        name:'',
        email:'',
        password:'',
        about:'',
    })

    const [error,seterror]=useState({
        error:{},
        isError:false
    })
//handle change
const handleChange=(event,property)=>{
    //dynamically setting the values
    setdata({...data,[property]:event.target.value},()=>{
        console.log(data);      
})
}
const resetdata=()=>{
    setdata({
        name:'',
        email:'',
        password:'',
        about:'',
    })
}
//submitting the form
const submitForm=(event)=>{
    event.preventDefault()
    console.log(data);

    //data validate
    //call server api for sending data
}
    return (
        <Base>
        <Container>
         <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
                <CardHeader>
                   <h3>Signup with your valid email id</h3>
                </CardHeader>
                <CardBody>
                    {/* creating form */}
                    <Form onSubmit={submitForm}>
                        {/* Name field */}
                        <FormGroup>
                            <Label for="name" className="p-2">Enter your name</Label>
                            <Input
                            type="text"
                            placeholder="enter here"
                            id="name"
                            onChange={(e)=>handleChange(e,'name')}
                            value={data.name}
                            ></Input>
                        </FormGroup>
                         
                        {/* Email field */}
                        <FormGroup>
                            <Label for="email" className="p-2">Enter your email</Label>
                            <Input type="email"
                            placeholder="enter here"
                            id="email"
                            onChange={(e)=>handleChange(e,'email')}
                            value={data.email}
                            ></Input>
                        </FormGroup>
                        {/*password*/}
                        <FormGroup>
                            <Label for="password" className="p-2">Enter your password</Label>
                            <Input type="password"
                            placeholder="enter here"
                            id="password"
                            onChange={(e)=>handleChange(e,'password')}
                            value={data.password}
                            ></Input>
                        </FormGroup>
                        {/*About field*/}
                        <FormGroup>
                            <Label for="about" className="p-2">Enter your queries</Label>
                            <Input type="textarea"
                            placeholder="enter here"
                            id="about"
                            style={{height: "250px"}}
                            onChange={(e)=>handleChange(e,'about')}
                            value={data.about}
                            ></Input>
                        </FormGroup>
                        <Container className="text-center">
                            <Button color="light" outline>Register</Button>
                            <Button onClick={resetdata} color="secondary" type="reset" className="m-2">Reset</Button>
                        </Container>
                         
                    </Form>
                </CardBody>
            </Card>
            </Col>
         </Row>
        </Container>
        <footer>
        <h4>About Infinite Productix</h4>
            <p>
              Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
            </p>
    </footer>
      
       </Base>
    )}
    export default Signup;