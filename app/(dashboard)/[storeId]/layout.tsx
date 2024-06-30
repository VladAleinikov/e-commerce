import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { storeId: string };
}

const DashboardLayout = async ({ children, params }: DashboardLayoutProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
    return null;
  }

  const store = await prismadb.store.findFirst({
    where: { id: params.storeId, userId },
  });

  if (!store) {
    redirect("/");
    return null;
  }
  return <>{children}</>;
};

export default DashboardLayout;
