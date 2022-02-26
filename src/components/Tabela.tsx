import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <td className="text-left p-4">Código</td>
        <td className="text-left p-4">Nome</td>
        <td className="text-left p-4">Idade</td>
        <td className=" p-4">Ações</td>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      );
    });
  }
  function renderizarAcoes(cliente: Cliente) {
    return (
      <td>
        <button
          className={`flex justify-center  items-center text-green-600 rounded-full hover: bg-purple-50 p-2 m-1`}
        >
          {IconeEdicao}
        </button>
        <button
          className={`flex justify-center  items-center text-red-500 rounded-full hover: bg-purple-50 p-2 m-1`}
        >
          {IconeLixo}
        </button>
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden ">
      <thead
        className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-800`}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
