"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import axiosConfig from "../../../axiosConfig"
import { useEffect, useState } from "react"
import { format } from "date-fns";
import { formatInTimeZone } from 'date-fns-tz'
import { Button } from "@/components/ui/button";
import { DeleteAlert } from "./DeleteAlert";
import { EditProduct } from "./EditProduct";
  
export default function TableComponent(){

    const[produtosList, setProdutosList] = useState<{ id: number, nome: string, descricao: string, preco: number, data_criacao: Date }[]>([])

    const formatarData = (data: Date) => {
        return formatInTimeZone(data, 'Pacific/Easter', "dd/MM/yyyy 'às' HH:mm")
    }

    const getProdutos = async () => {
        try {
            await axiosConfig.get('/produto').then((response) => {
                console.log(response.data)
                setProdutosList(response.data)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProdutos()
    },[])

    return (
        <Table>
  <TableCaption>Listagem de seus produtos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-10">Id</TableHead>
      <TableHead>Nome</TableHead>
      <TableHead>Descrição</TableHead>
      <TableHead className="text-right">Preço</TableHead>
      <TableHead className="">Data de criação / edição</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
        {produtosList.map((produto) => (
            <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell className="w-32">{produto.nome}</TableCell>
                <TableCell>{produto.descricao}</TableCell>
                <TableCell className="text-right w-40">R$ {produto.preco}</TableCell>
                <TableCell className="w-56">{formatarData(produto.data_criacao)}</TableCell>
                <TableCell className="w-40">
                    <div className="flex gap-4">
                        <EditProduct idProduto={produto.id}></EditProduct>
                        <DeleteAlert idProduto={produto.id}></DeleteAlert>
                    </div>
                </TableCell>
            </TableRow>
        ))}
  </TableBody>
</Table>
    )
}



