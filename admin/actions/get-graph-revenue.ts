import prismadb from "@/lib/prismadb";

interface IGraphData {
  name: string;
  total: number;
}

export const getGraphRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orederItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const monthlyRevenue: { [key: number]: number } = {};

  for (const order of paidOrders) {
    const month = order.createdAt.getMonth();
    let revenueForOrder = 0;

    for (const item of order.orederItems) {
      revenueForOrder += item.product.price.toNumber();
    }

    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
  }

  const graphData: IGraphData[] = [
    { name: "Янв", total: 0 },
    { name: "Февр", total: 0 },
    { name: "Мар", total: 0 },
    { name: "Апр", total: 0 },
    { name: "Май", total: 0 },
    { name: "Июн", total: 0 },
    { name: "Июл", total: 0 },
    { name: "Авг", total: 0 },
    { name: "Сент", total: 0 },
    { name: "Окт", total: 0 },
    { name: "Нояб", total: 0 },
    { name: "Дек", total: 0 },
  ];

  for (const month in monthlyRevenue) {
    graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
  }

  return graphData;
};
