import { Console } from "console";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulatio";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCLiente from "../backend/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCLiente()


  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  
  useEffect(() => {
    obterTodos()
  }, [])
  
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })    
  }

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
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
              <Botao cor="green" onClick={novoCliente}>Novo CLiente</Botao>
            </div>
            <Tabela clientes={clientes}
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExluido}/>
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente}
                      cancelado={() => setVisivel('tabela')}></Formulario>
        )}
      </Layout>
    </div>
  );
}
