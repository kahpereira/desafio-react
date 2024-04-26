import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useFetch from '../hooks/useFetch';

const Produto = () => {
  const { id } = useParams();

  const { request, data: product, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }
    fetchData();
  }, [request, id]);

  if (error) return <p>{error}</p>;
  if (loading) return  <div className="loading" />;
  if(product === null) return null;
  return (
    <section className={styles.produto}>
      <Helmet>
        <title>{`Desafio - React | ${product.nome}`}</title>
        <meta name="description" content={`Esse é um produto: ${product.nome}`} />
      </Helmet>
      <div>
        <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.preco}>R$ {product.preco}</span>
        <p className={styles.descricao}>{product.descricao}</p>
      </div>
    </section>
  )
}

export default Produto