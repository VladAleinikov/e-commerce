import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Заказы (${data.length})`}
        description="Заказы товаров вашего магазина"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
