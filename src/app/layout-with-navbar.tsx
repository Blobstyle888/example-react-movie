import Sidebar from "@/components/sidebar";
import { getSession } from "@/store/feature/auth-slice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LayoutWithNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.auth.value);

  useEffect(() => {
    dispatch(getSession());

    if (!username) {
      router.push("/");
    }
  }, [username, router, dispatch]);

  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
