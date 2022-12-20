import React from 'react'
import { Container, H1, Container2, Inputlabel, Input, Button,Image } from './styles'
import people from './assets/people1.svg'
const App = () => {

    return (<Container>
        <Image alt='logo' src={people} />
        <Container2>
            <H1>Olá!</H1>
            <Inputlabel>Nome</Inputlabel>
            <Input placeholder='Nome'></Input>
            <Inputlabel>Idade</Inputlabel>
            <Input placeholder='Idade'></Input>
            <Button>Cadastrar</Button>
        </Container2>
    </Container>
    )
}
export default App