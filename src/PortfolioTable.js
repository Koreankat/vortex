import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"

const columns = [
  {
    id: "name",
    label: "NAME",
    minWidth: "10vw",
    align: "left",
    format: (value) => value,
    sx: (value) =>
      value > 0
        ? { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" }
        : { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" },
  },
  {
    id: "cost",
    label: "COST",
    minWidth: "10vw",
    align: "right",
    format: (value) => "$ " + value,
    sx: (value) =>
      value > 0
        ? { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" }
        : { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" },
  },
  {
    id: "current_price",
    label: "CURRENT PRICE",
    minWidth: "10vw",
    align: "right",
    format: (value) => "$ " + value,
    sx: (value) =>
      value > 0
        ? { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" }
        : { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" },
  },
  {
    id: "new_holdings",
    label: "HOLDINGS",
    minWidth: "10vw",
    align: "right",
    format: (value) => value,
    sx: (value) =>
      value > 0
        ? { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" }
        : { color: "white", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" },
  },
  {
    id: "net_income",
    label: "PROFIT/LOSS",
    minWidth: "10vw",
    align: "right",
    format: (value) => {
      return (value > 0 ? "+" : "-") + " $ " + (value < 0 ? value * -1 : value)
    },
    sx: (value) =>
      value > 0
        ? { color: "#47A663", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" }
        : { color: "#F94F59", fontWeight: "500", fontSize: "min(1.5vh,1.5vw)" },
  },
]

function createData(name, cost, current_price, holdings) {
  console.log(holdings)
  let net_income = ((current_price - cost) * holdings).toFixed(4)
  let new_holdings =
    holdings + " " + name.substring(name.indexOf("(") + 1, name.length - 1)
  console.log(new_holdings, "HI")
  return { name, cost, current_price, new_holdings, net_income }
}

const rows = [
  createData("Vortexium (VTX)", 45, 65, 0.00001),
  createData("Binance Coin (BNB)", 380.37, 449.37, 0.00001),
  createData("Polkadot (DOT)", 10.45, 23.1, 0.00001),
  createData("Bitcoin (BTC)", 43609.43, 46712.33, 0.00001),
  createData("Ethereum (ETH)", 3200.18, 3255.56, 0.00001),
]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        marginTop: "3vh",
        backgroundColor: "#333333",
      }}
    >
      <TableContainer sx={{ maxHeight: "28vh" }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: "#333333",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "min(1.5vh,1.5vw)",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={column.sx(value)}
                        >
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
