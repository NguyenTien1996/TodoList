import React, {useEffect} from 'react';
import WelcomeCoponent from '../components/welcome';
import Result from '../components/result';
import { getDataVirusCorona} from '../actions/index';
import {useDispatch} from 'react-redux';

const Corona = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = () => {
            dispatch(getDataVirusCorona());
        }
        getData();
    },[]);
    return(
        <>
            <WelcomeCoponent/>
            <Result/>
        </>
    )
}
export default Corona;