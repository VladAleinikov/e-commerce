import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface SetupLayoutProps{
  children: React.ReactNode
}

const SetupLayout = async ({
children
}: SetupLayoutProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
    return null;
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId
    }
  });

  if (store) {
    redirect(`/${store.id}`);
    return null;
  }

  return (
    <>{children}</>
  )
}

export default SetupLayout