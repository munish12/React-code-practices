import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Text,
  FormControl,
  Input,
  Spacer,
} from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import GradientBorder from "../components/GradientBorder/GradientBorder";
import { FaSortUp, FaSortDown } from "react-icons/fa"; // Import icons

function DataTable({ data = [], columns, tableName }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <Flex direction="column" pt={{ base: "120px", md: "0" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader justifyContent="between" p="6px 0px 22px 0px">
          <Flex w="100%" alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize="lg" color="#fff" fontWeight="bold" mb="0">
              {tableName}
            </Text>
            <FormControl w={"auto"}>
              <GradientBorder w={{ lg: "fit-content" }} borderRadius="20px">
                <Input
                  color="white"
                  bg="rgb(19,21,54)"
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  placeholder="Search..."
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
              </GradientBorder>
            </FormControl>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex flexDirection={"column"} w="100%" h="100%">
            <Table variant="simple" color="#fff">
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id} color="gray.400">
                    {headerGroup.headers.map((header) => (
                      <Th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        color="gray.400"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                        cursor="pointer"
                        whiteSpace="nowrap" // Prevent text wrapping
                        overflow="hidden" // Hide overflow text
                        textOverflow="ellipsis" // Add ellipsis for overflow text
                      >
                        {header.isPlaceholder ? null : (
                          <Flex align="center">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {header.column.getIsSorted() ? (
                              header.column.getIsSorted() === "desc" ? (
                                <FaSortDown style={{ marginLeft: "4px" }} /> // Use icon for descending
                              ) : (
                                <FaSortUp style={{ marginLeft: "4px" }} />
                              ) // Use icon for ascending
                            ) : null}
                          </Flex>
                        )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {table.getRowModel().rows.map((row) => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id} borderColor="#56577A">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Flex justify="flex-end" mt="6" alignItems="center">
              <Button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                borderRadius="12px"
                bg="brand.200"
                _hover={{ opacity: "0.8" }}
                _active={{ opacity: "0.9" }}
                color="white"
              >
                Previous
              </Button>
              <Text mx="4" mb="0">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </Text>
              <Button
                borderRadius="12px"
                bg="brand.200"
                _hover={{ opacity: "0.8" }}
                _active={{ opacity: "0.9" }}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                color="white"
              >
                Next
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default DataTable;
