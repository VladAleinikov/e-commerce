"use client";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const Summary = () => {
  const { items, removeAll } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const totatPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const onCheckout = async () => {
    setIsLoading(true);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    toast.success("Оплата проведена!");
    removeAll();
    setIsLoading(false);
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Итог заказа</h2>
        <Button onClick={removeAll} disabled={totatPrice === 0 || isLoading}>
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
      <Button
        onClick={onCheckout}
        className="w-full mt-6"
        disabled={totatPrice === 0 || isLoading}
      >
        Оформить заказ
      </Button>
    </div>
  );
};
