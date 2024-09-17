import { Console } from "console";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulatio";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCLiente from "../backend/ColecaoCliente";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { selecionarCliente, 
          novoCliente, salvarCliente, 
          excluirCliente, cliente, clientes,
        tabelaVisivel, exibirTabela } = useClientes()
  
  return (
    <div
      className={`flex justify-center items-center
                  h-screen bg-gradient-to-r from-blue-500 to-purple-500
                  text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" onClick={novoCliente}>Novo CLiente</Botao>
            </div>
            <Tabela clientes={clientes}
                    clienteSelecionado={selecionarCliente}
                    clienteExcluido={excluirCliente}/>
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente}
                      cancelado={exibirTabela}></Formulario>
        )}
      </Layout>
    </div>
  );
}
