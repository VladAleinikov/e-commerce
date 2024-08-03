import prismadb from "@/lib/prismadb";
import {format} from 'date-fns'
import { CategoryClient } from "./_components/client";
import { CategoryColumn } from "./_components/columns";

interface CategoriesPageProps {
  params: { storeId: string };
}

const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formatedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formatedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
