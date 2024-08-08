"use client";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

export const Summary = () => {
  const { items, removeAll } = useCart();

  const totatPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Итог заказа</h2>
        <Button onClick={removeAll} disabled={totatPrice === 0}>
          Очистить корзину
        </Button>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Итоговая цена
          </div>
          <Currency value={totatPrice} />
        </div>
      </div>
      <Button className="w-full mt-6" disabled={totatPrice === 0}>
        Оформить заказ
      </Button>
    </div>
  );
};
