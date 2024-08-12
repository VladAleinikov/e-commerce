import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
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

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotla = order.orederItems.reduce((orederSum, item) => {
      return orederSum + item.product.price.toNumber();
    }, 0);

    return total + orderTotla;
  }, 0);

  return totalRevenue;
};
