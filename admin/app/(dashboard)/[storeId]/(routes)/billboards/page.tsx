import prismadb from "@/lib/prismadb";
import {format} from 'date-fns'
import { BillboardClient } from "./_components/client";
import { BillboardColumn } from "./_components/columns";

interface BillboardsPageProps {
  params: { storeId: string };
}

const BillboardsPage = async ({ params }: BillboardsPageProps) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formatedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formatedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
