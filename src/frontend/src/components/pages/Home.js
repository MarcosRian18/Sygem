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
                <h1>Company Hard</h1>
                <p> A sua companhia sem organização é um mal sem comparação!</p>
                <p>Com este sistema você é capaz de ter esse controle
                de volta, aonde você tem total poder de criar novos cadastros de seus usuários e gerenciar, tendo assim mais organização e agilidade no processo de cadastrar ou consultar algum empregado.</p>
            </div>
            <div className='container-bottom'>
            <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Companhia</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Organização</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

             <Card className='cards' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Controle</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        
        
        //FAZER MUDANÇAS DE IMAGENS E CARROUSEL OU IMAGENS BACKGROUND
        
    )
}

export default Home;