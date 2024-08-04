import prismadb from "@/lib/prismadb";
import {format} from 'date-fns'
import { SizesClient } from "./_components/client";
import { SizeColumn } from "./_components/columns";

interface SizesPageProps {
  params: { storeId: string };
}

const SizesPage = async ({ params }: SizesPageProps) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formatedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formatedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
