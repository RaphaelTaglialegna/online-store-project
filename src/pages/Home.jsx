import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories';

class Home extends React.Component {
  render() {
    return (
      <section className="main-screen-section">
        <header className="main-screen-header">
          <div className="container-input">
            <input
              type="text"
            />
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button
              type="button"
            >
              Carrinho
            </button>
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <Categories />
      </section>
    );
  }
}

export default Home;
