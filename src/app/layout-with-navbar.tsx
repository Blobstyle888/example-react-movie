import Sidebar from "@/components/sidebar";

export default function LayoutWithNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
