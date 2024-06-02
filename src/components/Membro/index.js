import React, { Component } from 'react'

const saudacao = 'Bem-vindo(a),'

class Membro extends Component{

    constructor(props) {
    super(props);
        this.state = {
            nome: props.nome,
            mostrarSaudacao: true
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }
    
    entrar() {
        this.setState({ nome: 'Daniel', mostrarSaudacao: true });
    }
     sair() {
        this.setState({ nome: 'Obrigado e volte sempre!', mostrarSaudacao: false });
        setTimeout(() => {
            this.setState({ nome: 'Visitante', mostrarSaudacao: true });
        }, 3000); // 3 segundos
    }


    render() {
        return (
            <div className='mx-auto text-center p-4 bg-green-50'>
                
                {this.state.mostrarSaudacao && (
                <h1 className='tet-2xl font-bold p-2 mb-4'>{saudacao} {this.state.nome}</h1>)}

                {!this.state.mostrarSaudacao && (
                    <h1 className='tet-2xl font-bold p-2 mb-4'>{this.state.nome}</h1>
                )}
                
                <button
                    className='me-4 border-solid border-2 border-green-300 bg-green-100 p-1 rounded-md w-40'
                    onClick={this.entrar}> 
                    Entrar como Daniel
                </button>

                <button
                    className='me-4 border-solid border-2 border-green-300 bg-green-100 p-1 rounded-md w-40'
                    onClick={this.sair}
                    >
                    Sair
                </button>
            </div>
        )
    }
}

export default Membro