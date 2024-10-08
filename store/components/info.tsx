"use client"

import { IProduct } from "@/types";
import { Currency } from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: IProduct;
}

export const Info = ({ data }: InfoProps) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Размер:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Цвет:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={() => addItem(data)}
          className="flex items-center gap-x-2"
        >
          Добавить в корзину
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
