import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useFetch from '../hooks/useFetch';

const Produtos = () => {
  const { request, data: products, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request('https://ranekapi.origamid.dev/json/api/produto');
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return  <div className="loading" />;
  if (products === null) return null;
  return (
    <section className={styles.produtos}>
      <Helmet>
        <title>Desafio - React</title>
        <meta name="description" content='página de produtos' />
      </Helmet>
      {products.map((product) => (
        <Link key={product.id} to={`produto/${product.id}`}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.nome}>
            {product.nome}
          </h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos;