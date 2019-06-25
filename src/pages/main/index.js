import React,{Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './style.css';

export default class Main extends Component{
state = {
    products: [],
    productInfo:{},
    page: 1  
};

    componentDidMount(){
        this.loadProducts();
    }

    // Usando async await 
    loadProducts= async (page=1) => {

        const response= await api.get(`/products?page=${page}`);

        const{docs, ...productInfo}= response.data;

        console.log(response.data);
        
        this.setState({products: docs, productInfo, page});

     // this.setState({products:response.data.docs});

    };
     // Anterior Página
    prevPage= () =>{
        const{page} = this.state;

        if(page===1) return;

        const pageNumber= page-1;

        console.log(page);

        this.loadProducts(pageNumber);

    }
     // Proxima Página
    nextPage= () =>{
        const{page, productInfo} = this.state;

        if(page===productInfo.pages) return;

        const pageNumber=page+1;

        this.loadProducts(pageNumber);
    }


    render(){
        const{page, productInfo}=this.state;

     return(
         <div className="product-list">
               {this.state.products.map(produ =>(
                    <article key={produ._id}>
                          <strong>{produ.title}</strong>
                          <p>{produ.description}</p>
                          <Link to={`products/${produ._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
         </div>
     )
    }

}