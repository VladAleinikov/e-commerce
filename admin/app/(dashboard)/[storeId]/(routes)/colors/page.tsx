import prismadb from "@/lib/prismadb";
import {format} from 'date-fns'
import { ColorsClient } from "./_components/client";
import { ColorColumn } from "./_components/columns";

interface ColorsPageProps {
  params: { storeId: string };
}

const ColorsPage = async ({ params }: ColorsPageProps) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formatedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formatedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
