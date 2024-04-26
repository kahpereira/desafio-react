import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import { Helmet } from 'react-helmet';

const dados = [
  'kamilapereira@outlook.com',
  '(11) 94209-6415',
  'Ribeirão Pires - SP'
]

const Contato = () => {
  return (
    <section className={styles.contato}>
      <Helmet>
        <title>Desafio - React | Contato</title>
        <meta name="description" content="Entre em contato" />
      </Helmet>
      <div>
        <img src={foto} alt="Contato" />
      </div>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          {dados.map((dado, index) => (
            <li key={index}>{dado}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contato