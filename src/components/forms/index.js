import React from "react";
import styled from "styled-components";

export const FormGroup = styled.div`
    display: block;
	margin: 0.5rem auto;
    width:100%;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #ff9910;;
    display: block;
`;


export const Input = styled.input`
	padding:0.8em;
	background: lightgray;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
    box-sizing:border-box;
    outline:none;
`;

export const Select = styled.select`
    padding:0.8rem;
	background: lightgray;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 1rem;
    outline:none;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: red;
    display: block;
`;

export const Container = styled.div`
    max-width:500px;
    margin:auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding:1.5rem;
    border-radius:5px;
`;
export const ContainerList = styled.div`
    max-width:500px;
    max-height:700px;
    overflow-y:auto;
    margin:auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding:1.5rem;
    border-radius:5px;
`;
export const Button = styled.button`
    border: none;
    background-color: #ff9910;
    padding: 0.8rem 1.5rem;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    margin:1rem auto;
`;

export const Para = styled.p`
    margin:1rem auto;
`

