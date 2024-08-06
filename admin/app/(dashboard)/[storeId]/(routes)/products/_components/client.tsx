"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient = ({ data }: ProductClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Продукты (${data.length})`}
          description="Управляйте товаром вашего магазина"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
        >
          <Plus className="mr-2 w-4 h-4" />
          Добавить новый
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API пути для продуктов" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId"/>
    </>
  );
};
