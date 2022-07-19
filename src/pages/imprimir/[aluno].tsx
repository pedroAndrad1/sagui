import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useRef } from "react";
import Divider from "../../components/Divider";
import PerfilAluno from "../../layouts/PerfilAluno";
import styles from "../../styles/imprimir-aluno.module.scss";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { GetServerSideProps } from "next";
import AlunoService from "../../services/AlunoService";

export default function ImprimirAluno({
  alunoAcessado,
  disciplinasCursadas,
  svgString,
}) {
  const svg = useRef(null);
  let domParser;
  let svgFluxograma;

  useEffect(() => {
    if (svg.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      domParser = new DOMParser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      svgFluxograma = domParser.parseFromString(
        svgString,
        "image/svg+xml"
      ).documentElement;
      svg.current.appendChild(svgFluxograma);
    }
    setTimeout(() => window.print(), 1000);

    return () => {
      clearTimeout();
    };
  }, [svgFluxograma]);

  const data = useMemo(() => disciplinasCursadas, [disciplinasCursadas]);

  const columns = useMemo(
    () => [
      {
        Header: "Código",
        accessor: "codigo", //chave da info para a coluna
      },
      {
        Header: "Nome",
        accessor: "nome", //chave da info para a coluna
      },
      {
        Header: "Status",
        accessor: "status", //chave da info para a coluna
      },
      {
        Header: "Qtd. de Reprovações",
        accessor: "qts_reprovacoes", //chave da info para a coluna
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // @ts-ignore
    useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <main className={styles.wrapper}>
      <h1>{alunoAcessado.nome}</h1>
      <PerfilAluno alunoAcessado={alunoAcessado} />
      <section className={styles.disciplinas_wrapper}>
        <div className={styles.fluxograma} ref={svg}></div>
        <div className={styles.disciplinas}>
          <h2>Disciplinas cursadas</h2>
          {/* Aplicando as props */}
          <table {...getTableProps()} cellSpacing={0}>
            <thead>
              {/* Fazendo um looping para as linhas de header */}
              {headerGroups.map((headerGroup, i) => (
                // Aplicando as props de header
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={`${i}_header_row`}
                >
                  {headerGroup.headers.map((column, i) => (
                    //Aplicando as props de header cell
                    <th {...column.getHeaderProps()} key={`${i}_header_cell`}>
                      {/* Renderizando a cell */}
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Aplicando as props de body */}
            <tbody {...getTableBodyProps()}>
              {
                //Fazendo um looping nas rows
                rows.map((row, i) => {
                  //Preparando a row para display
                  prepareRow(row);

                  return (
                    //Aplicando as props de row
                    <tr {...row.getRowProps()} key={`${i}_body_row`}>
                      {
                        //fazendo um looping nas row cells
                        row.cells.map((cell, i) => {
                          if (cell.column.id === "status") {
                            /**Isso seria mais simples com styled-components,
                             * eu sei... My bad.
                             */
                            switch (cell.value) {
                              case "Matriculado":
                                //Aplicando as props de cell
                                return (
                                  <td
                                    key={`${i}_body_cell`}
                                    {...cell.getCellProps()}
                                    className={styles.cursando}
                                  >
                                    {/* Renderizando a cell */}
                                    {cell.render("Cell")}
                                  </td>
                                );
                              case "Aprovado":
                                return (
                                  <td
                                    key={`${i}_body_cell`}
                                    {...cell.getCellProps()}
                                    className={styles.aprovado}
                                  >
                                    {/* Renderizando a cell */}
                                    {cell.render("Cell")}
                                  </td>
                                );
                              case "Reprovado":
                                return (
                                  <td
                                    key={`${i}_body_cell`}
                                    {...cell.getCellProps()}
                                    className={styles.reprovado}
                                  >
                                    {/* Renderizando a cell */}
                                    {cell.render("Cell")}
                                  </td>
                                );
                            }
                          } else {
                            return (
                              //Aplicando as props de cell
                              <td
                                key={`${i}_body_cell`}
                                {...cell.getCellProps()}
                              >
                                {/* Renderizando a cell */}
                                {cell.render("Cell")}
                              </td>
                            );
                          }
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { aluno } = context.params;
  let svgString;
  const alunoAcessado = await AlunoService.getAluno(aluno).then(async (res) => {
    // Extraindo o SVG como texto
    const jsonText = await res.text();
    svgString = jsonText.slice(
      jsonText.indexOf("<"),
      jsonText.lastIndexOf(">") + 1
    );
    // Extraindo os dados que nao sao o svg como texto e parseando para Json
    const jsonPart0 = jsonText.substring(0, jsonText.indexOf("svg") - 1);
    const jsonPart1 = jsonText.substring(
      jsonText.indexOf("consolidaRegraData") - 1,
      jsonText.length
    );

    return JSON.parse(jsonPart0.concat(jsonPart1));
  });

  // Retirando a info de tracamentos de curso, para evitar que va para a tabela de disciplinas
  const disciplinasCursadasRaw1 =
    alunoAcessado.disciplinas._embedded.disciplinaCursadaDataList.filter(
      (disciplina) => disciplina.titulo != "TRANCAMENTO GERAL"
    );
  // Mapeando as diciplinas vindas do back para ficar no formato da tabela de disciplinas
  const disciplinasCursadas = disciplinasCursadasRaw1.map((disciplina) => {
    return {
      codigo: disciplina.codigo,
      nome: disciplina.titulo,
      status: disciplina.situacao,
      qts_reprovacoes: disciplina.qtdReprovacao,
    };
  });

  return {
    props: {
      alunoAcessado,
      disciplinasCursadas,
      svgString,
    },
  };
};
