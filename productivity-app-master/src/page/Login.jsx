import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/base";

const Login=()=>{
    return (
        <Base>
        <Container>
         <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
                <CardHeader>
                   <h3>Login</h3>
                </CardHeader>
                <CardBody>
                    {/* creating form */}
                    <Form>
                        {/* Email field */}
                        <FormGroup>
                            <label for="email" className="p-2">Enter your email</label>
                            <Input type="email"
                            placeholder="enter here"
                            id="email"
                            ></Input>
                        </FormGroup>
                        {/*password*/}
                        <FormGroup>
                            <label for="password" className="p-2">Enter your password</label>
                            <Input type="password"
                            placeholder="enter here"
                            id="password"
                            ></Input>
                        </FormGroup>
                        <Container className="text-center">
                            <Button color="light" outline>Login</Button>
                            <Button color="secondary" type="reset" className="m-2">Forgot your password?</Button>
                        </Container>
                         
                    </Form>
                </CardBody>
            </Card>
            </Col>
         </Row>
        </Container>
        <footer>
        <h4>@copy; 2023 About Infinite Productix</h4>
            <p>
              Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
            </p>
        </footer>
      
       </Base>
    )}
    export default Login;