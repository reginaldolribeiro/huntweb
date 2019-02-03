import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page=1) => {
        // const response = await api.get("/products");
        const response = await api.get(`/products?page=${page}`);
        
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page });

        // this.setState({ products: response.data.docs });

    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if(page === 1) return;

        const pageNumber = page-1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        // Se tiver na ultima pagina, da um return, nao faz nada
        if(page === productInfo.pages) return;

        const pageNumber = page+1;

        this.loadProducts(pageNumber);
    }

    render() {
        // return <h1>Contagem de produtos: {this.state.products.length}</h1>;        
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    // <h2 key={product._id}>{product.title}</h2>
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={this.state.page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={this.state.page === this.state.productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}