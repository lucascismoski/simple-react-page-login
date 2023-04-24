import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            erro: null       
        }
    
        this.acessar = this.acessar.bind(this);
    }

    async acessar(){
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=>{
            window.location.href = "./principal";
        })
        .catch((erro)=>{
            this.setState({ erro: erro.message });
        });
    }

    render(){
        return(
            <div>
                <h1>Página de Login</h1>
                <input type="email" placeholder='Email' onChange={(e) => this.setState({email:e.target.value})}/> 
                <br></br>
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha:e.target.value})}/> 
                <br></br>                  
                <button onClick={this.acessar}>Acessar</button>    
                {this.state.erro && <p>{this.state.erro}</p>}        
            </div>
        )
    }
}

export default Login;