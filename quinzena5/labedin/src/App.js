import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Email from './img/email.png'
import Mailbox from './img/mailbox.png'
import Botucatu from './img/botucatu.jpg'
import Senac from './img/senac.png'
import Facebook from './img/facebook.png'
import Linkedin from './img/linkedin.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/50558784?s=400&u=d908a8e70c60218d0a6d6080d9592a64c00c7092&v=4" 
          nome="Ricardo de Almeida Ramos" 
          descricao="Oi, eu sou o Ricardo. Sou estudante da Labenu, na turma Muyembe. Estou aprendendo frontend com React! Já fui redator publicitário, apesar de ser formado em jornalismo, e meu foco é virar um desenvolvedor eficiente e capaz de alçar voos incríveis na área de tecnologia."
        />

      <CardPequeno
        imagem={ Email }
        titulo="Vamos conversar?"
        descricao="ricardoalmeidaramos@gmail.com"
      />

      <CardPequeno
        imagem={ Mailbox }
        titulo="Prefere o método analógico?"
        descricao="Rua do Endereço, 123"
      />
        
      <ImagemButton 
        imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
        texto="Ver mais"
      />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ Botucatu } 
          nome="Prefeitura de Botucatu (Janeiro/2020 - atualmente)" 
          descricao="Organização e administração de arquivo do departamento de gestão de pessoas."
        />
        
        <CardGrande 
          imagem={ Senac } 
          nome="Senac São Paulo (dezembro/2020)" 
          descricao="Breve período como UX Writer por meio de contrato temporário, para auxiliar no planejamento inicial da estratégia textual do site atualizado do Senac São Paulo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="https://www.facebook.com/rustedcreature" className="link-redes-sociais">
          <ImagemButton 
            imagem={ Facebook } 
            texto="Facebook" 
          />      
        </a>  

        <a href="https://www.linkedin.com/in/ricardodealmeidaramos/" className="link-redes-sociais">
          <ImagemButton 
            imagem={ Linkedin } 
            texto="LinkedIn" 
          />
        </a>
      </div>
    </div>
  );
}

export default App;
