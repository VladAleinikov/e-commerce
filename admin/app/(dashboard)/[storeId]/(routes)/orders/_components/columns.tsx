"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Продукты",
  },
  {
    accessorKey: "phone",
    header: "Телефон",
  },
  {
    accessorKey: "address",
    header: "Адрес",
  },
  {
    accessorKey: "totalPrice",
    header: "Цена",
  },
  {
    accessorKey: "isPaid",
    header: "Оплачено",
    cell: ({ row }) => (row.original.isPaid ? "Да" : "Нет"),
  },
  {
    accessorKey: "createdAt",
    header: "Дата",
  },
];
