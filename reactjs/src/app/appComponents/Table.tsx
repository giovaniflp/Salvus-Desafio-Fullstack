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
import axios from "axios"
import { useEffect, useState } from "react"
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { DeleteAlert } from "./DeleteAlert";
  
export default function TableComponent(){

    const[produtosList, setProdutosList] = useState<{ id: number, nome: string, descricao: string, preco: number, data_criacao: Date }[]>([])

    const formatarData = (data: Date) => {
        return format(new Date(data), "dd/MM/yyyy 'às' HH:mm")
    }

    const getProdutos = async () => {
        try {
            await axios.get('http://localhost:3030/produto').then((response) => {
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
      <TableHead>Data de criação</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
        {produtosList.map((produto) => (
            <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.descricao}</TableCell>
                <TableCell className="text-right w-24">R$ {produto.preco}</TableCell>
                <TableCell className="w-40">{formatarData(produto.data_criacao)}</TableCell>
                <TableCell className="w-40">
                    <div className="flex gap-4">
                        <Button className="bg-orange-500">Editar</Button>
                        <DeleteAlert></DeleteAlert>
                    </div>
                </TableCell>
            </TableRow>
        ))}
  </TableBody>
</Table>
    )
}



