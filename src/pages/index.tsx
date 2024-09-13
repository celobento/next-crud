import { Console } from "console";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulatio";
import { useState } from "react";

export default function Home() {
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 27, '2'),
    new Cliente('Carlos', 14, '3'),
    new Cliente('Pedro', 35, '4'),
  ]
  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExluido(cliente: Cliente){
    console.log("Excluindo: "+cliente.nome)
  }
  return (
    <div
      className={`flex justify-center items-center
                  h-screen bg-gradient-to-r from-blue-500 to-purple-500
                  text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" onClick={() => setVisivel('form')} >Novo CLiente</Botao>
            </div>
            <Tabela clientes={clientes}
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExluido}/>
          </>
        ) : (
          <Formulario cliente={clientes[3]}
                      clienteMudou={salvarCliente}
                      cancelado={() => setVisivel('tabela')}></Formulario>
        )}
      </Layout>
    </div>
  );
}
