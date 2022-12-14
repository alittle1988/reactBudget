import React from "react";
//import Button from "./Button.js";
import { Button, Form, Container, Row } from 'react-bootstrap';



function CategorysInput(props) {
    const {label, things, amount, validate} = props;

    const selectThingsType = (par) => {
        switch(par) {
            case "Tips":
                return <Form.Control id="input-name" onChange={props.onThingsChange} type="date" value={things} placeholder="What" style={{width:150}}></Form.Control>
                break;
            case "Gas":
                return <Form.Control id="input-name" onChange={props.onThingsChange} type="date" value={things} placeholder="What" style={{width:150}}></Form.Control>
                break;
            case "Groceries":
                return <Form.Control id="input-name" onChange={props.onThingsChange} type="date" value={things} placeholder="What" style={{width:150}}></Form.Control>
                break;
            default:
                return <Form.Control id="input-name" onChange={props.onThingsChange} type="text" value={things} placeholder="What" style={{width:150}}></Form.Control>
                break;
        }

        /*if(par === "Tips" || "Gas" || "Groceries") {
            return <Form.Control id="input-name" onChange={props.onThingsChange} type="date" value={things} placeholder="Things" style={{width:150}}></Form.Control>
        } else {
            return <Form.Control id="input-name" onChange={props.onThingsChange} type="text" value={things} placeholder="Things" style={{width:150}}></Form.Control>
        }*/
    }
    
    
    return (
        <Container  >
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="input-name" >{label}</Form.Label>
                            {selectThingsType(label)}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="input-amount" >Amount</Form.Label>
                            <Form.Control id="input-amount" onChange={props.onAmountChange} type="text" value={amount} placeholder="$0.00" style={{width:150}}></Form.Control>
                        </Form.Group>
                    </Form>
                    <div className="validate">{validate}</div>
                </Row>
                <Button onClick={props.onButtonClick}  className="submitButton">Submit</Button>
        </Container>
    );
}


export default CategorysInput;