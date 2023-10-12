import Sidebar from "@/components/sidebar";
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LayoutWithNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.auth.value);

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
