import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css'
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'



function Home(){
    return(
        <div className='body'>
            <div className='container-top'>
                <h1> Sistema de Gerenciamento Empresarial</h1>
                <p> A sua Empresa sem organização é um mal sem comparação!</p>
                <p>Com este sistema você é capaz de ter esse controle
                de volta, aonde você tem total poder de criar novos cadastros de seus usuários e gerenciar, tendo assim mais organização e agilidade no 
                processo de cadastrar ou consultar algum empregado na sua empresa.</p>
            </div>
            <div className='container-bottom'>
            <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Companhia</Card.Title>
                    <Card.Text>
                    Sua companhia vai ser vista e gerenciada de forma diferente do que 
                    estamos acostumados no nosso dia a dia, chega de Prancheta ou papelada, use o SYGEM.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Organização</Card.Title>
                    <Card.Text>
                    Em um ambiente de trabalho organizado, cada colaborador é como uma peça fundamental
                     em uma engrenagem, contribuindo de forma eficiente para que a empresa alcance seus objetivos.
                    </Card.Text>
                </Card.Body>
            </Card>

             <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Controle</Card.Title>
                    <Card.Text>
                    você diretor da sua empresa, terá o controle que muitos não tem, na palma da sua mão,
                     tenha o poder de controlar qualquer informação na sua empresa quando se trata de funcionarios e suas respectivas informações.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        
    )
}

export default Home;