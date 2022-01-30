import React, { useEffect, useState } from "react";
import { getConversionRates, getCurrencies } from "../slices/currencyExchange";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Label, Select, ContainerList } from "../components/forms"

const ConversionList = () => {
    const [defaultCurrency, setDefaultCurrency] = useState('');
    const [computedValues, setComputedValues] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector(state => state.currency);
    const { conversionList, currencies } = state;

    const handleDefaultCurrency = (e) => {
        setDefaultCurrency(e.target.value);
        localStorage.setItem('defaultCurrency', e.target.value)
    }

    useEffect(() => {
        if (!currencies.length) {
            dispatch(getCurrencies());
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('defaultCurrency')) {
            let val = localStorage.getItem('defaultCurrency');
            setDefaultCurrency(val);
            dispatch(getConversionRates(val));
        } else {
            alert('Please set a default Currency')
        }
    }, []);

    useEffect(() => {
        let computedArray = [];
        for (const prop in conversionList) {
            let computed = 1 / conversionList[prop];
            computedArray.push({ label: prop, value: computed })
        }

        setComputedValues(computedArray);
    }, [conversionList])

    return (<ContainerList>
        <FormGroup>
            <Label htmlFor="label">Select Default Currency</Label>
            <Select value={defaultCurrency} onChange={handleDefaultCurrency}>
                <option value='' disabled>Select</option>
                {currencies.map(([val, label]) => {
                    return <option value={val} key={label}>
                        {label}
                    </option>
                })}
            </Select>
        </FormGroup>
        <table id="currency">
            <thead>
                <tr>
                    <th>All</th>
                    <th>Selected</th>

                </tr>
            </thead>
            <tbody>
                {computedValues.filter((filteritem, i) => i !== 0).map(item => (<tr>
                    <td>1 {item.label}</td>
                    <td>{item.value} {defaultCurrency}</td>
                </tr>)

                )}

            </tbody>

        </table>

    </ContainerList>)
}

export default ConversionList;