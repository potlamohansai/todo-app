import React,{useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    ButtonGroup
    
} from "reactstrap"

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
    return (
        <Form>
            <FormGroup>
            <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add a Todo"
                />
                <Button
                color="warning"
                >
                ADD
                </Button>
            </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;



