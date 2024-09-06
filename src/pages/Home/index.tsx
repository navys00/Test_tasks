import React, { useState } from 'react';
import users from '../../components/users.json';
import { Button, Div, Input, InputDiv, H } from '../../components/style'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [email, Setemail] = useState<string>('')
    const [password, Setpassword] = useState<string>('')
    const navigate = useNavigate()
    const handleSubmit = () => {
        users.forEach((i) => (
            i.email === email && i.password === password ? navigate('/Success') : ''
        ))
    };
    return (
        <Div>
            <H>Вход</H>
            <InputDiv>
                <Input required placeholder='введите aaa@mail.ru' type='text' value={email} onChange={(e) => { Setemail(e.target.value) }} />
                <Input required placeholder='введите 111' type='password' value={password} onChange={(e) => { Setpassword(e.target.value) }} />
            </InputDiv>
            <Button onClick={handleSubmit}>Войти</Button>
        </Div>

    );
}

