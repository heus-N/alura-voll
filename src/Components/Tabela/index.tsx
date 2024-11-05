import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import { useState } from "react";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)"
  }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]:{
    backgroundColor: "var(--cinza-claro)",
    align: "right"
  }
}))

interface Props{
  children?: React.ReactNode
}

function Tabela({consultas} : {consultas: IConsulta[] | null}){
  const [tableHeaders] = useState([
    "Data",
    "Horário",
    "Profissional",
    "Especialidade",
    "Paciente",
    "Modalidade"
  ])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              {tableHeaders.map(head => (
                <CelulaEstilizada key={head}>
                  {head}
                </CelulaEstilizada>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((linha) => {
              return(
                <LinhaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {new Date(linha.data).toLocaleDateString()} </CelulaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {linha.horario} </CelulaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {linha.profissional[0].nome} </CelulaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {linha.profissional[0].especialidade} </CelulaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {linha.paciente} </CelulaEstilizada>
                  <CelulaEstilizada component="th" scope="row"> {linha.modalidade} </CelulaEstilizada>
                </LinhaEstilizada>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Tabela