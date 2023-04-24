import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';

class Cadastro extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",          
            dataNascimento: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then( async (retorno) => {
            
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,   
                dataNascimento: this.state.dataNascimento
            });
            
        });

        

        // firebase.firestore().collection("usuario").add({
        //     nome: this.state.nome,
        //     sobrenome: this.state.sobrenome,          
        //     // email: this.state.email,
        //     // senha: this.state.senha,
        //     dataNascimento: this.state.dataNascimento
        // });
    }

    render(){
        return(
            <div>
                <h1>Página de Cadastro</h1>
                <input type="email" placeholder='Email' onChange={(e) => this.setState({email:e.target.value})}/> 
                <br></br>
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha:e.target.value})}/> 
                <br></br>
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome:e.target.value})}/> 
                <br></br>
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome:e.target.value})}/> 
                <br></br>             
                <input type="date" placeholder='Nascimento' onChange={(e) => this.setState({dataNascimento:e.target.value})}/> 
                <br></br>
                <button onClick={this.gravar}>Salvar</button>
            </div>
        )        
    }
}

export default Cadastro;