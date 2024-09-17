import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCLiente from "../backend/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCLiente()
  
  const { exibirTabela, exibirForm, tabelaVisivel, formularioVisivel } = useTabelaOuForm()
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
      exibirTabela()
    })    
  }

  function selecionarCliente(cliente: Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    exibirForm()
  }
  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirForm
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}