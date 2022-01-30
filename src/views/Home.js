import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies, getPairFetch } from "../slices/currencyExchange";
import { FormGroup, Label, Input, Select, Container, Button, Para, Message } from "../components/forms"


const Home = () => {
    const [value, setValue] = useState('');
    const [baseValue, setBaseValue] = useState('');
    const [targetValue, setTargetValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrencies());
    }, [])

    // state
    const state = useSelector(state => state.currency);

    const { currencies, convertedVlaue, currenciesLoading, pairIsLoading } = state;
    const onInputChnage = (e) => {
        setValue(e.target.value)
    }
    const handleBaseChange = (e) => {
        setBaseValue(e.target.value);
    }
    const handleTargetChange = (e) => {
        setTargetValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (!value || !baseValue || !targetValue) {
            setError('Please fill all fields');
            return;
        } else {
            setError('');
        }
        const parsedValue = parseInt(value);
        const data = { targetValue, baseValue, parsedValue };
        dispatch(getPairFetch(data));
        setValue('');
        setBaseValue('');
        setTargetValue('');
    }



    return <Container>
        {error && <Message>{error}</Message>}
        <FormGroup>
            <Label htmlFor="label">Amount</Label>
            <Input id="amount" placeholder='Enter amount' value={value} onChange={onInputChnage} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="label">Enter From</Label>
            <Select value={baseValue} onChange={handleBaseChange}>
                <option value='' disabled>Select from</option>
                {currencies.map(([val, label]) => {
                    return <option value={val} key={label}>
                        {label}
                    </option>
                })}

            </Select>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="label">Enter To</Label>
            <Select value={targetValue} onChange={handleTargetChange}>
                <option value='' disabled>Select To</option>
                {currencies.map(([val, label]) => {
                    return <option value={val} key={label}>
                        {label}
                    </option>
                })}
            </Select>
        </FormGroup>
        <Button onClick={handleClick}>{pairIsLoading ? 'Converting...' : 'Convert'}</Button>

        {convertedVlaue && <Para>Result is: {convertedVlaue.toFixed(2)}</Para>}
    </Container>
}

export default Home;