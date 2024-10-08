import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { OrderClient } from "./_components/client";
import { OrderColumn } from "./_components/columns";
import { formatter } from "@/lib/utils";

interface OrdersPageProps {
  params: { storeId: string };
}

const OrdersPage = async ({ params }: OrdersPageProps) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orederItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orederItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orederItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formatedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
