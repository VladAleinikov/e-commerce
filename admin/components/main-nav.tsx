"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";


export const MainNav = () => {
  const pathname = usePathname();
  const params = useParams();
  
  const routes = [
    {
      href: `/${params.storeId}`,
      label: "К магазину",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Баннеры",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Категории",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Размеры",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Цвета",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Продукты",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Заказы",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Настройки",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      {routes.map((route) =>
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
      </Link>
      )}
    </nav>
  )
}
