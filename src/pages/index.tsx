import { Console } from "console";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 27, '1'),
    new Cliente('Carlos', 14, '1'),
    new Cliente('Pedro', 35, '1'),
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
        <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExluido}/>
      </Layout>
    </div>
  );
}
