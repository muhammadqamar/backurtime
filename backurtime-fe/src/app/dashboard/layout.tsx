import { Navbar } from "@/components/common";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <div className="min-h-dvh w-full">
      <Navbar />
      <div className="flex min-h-dvh w-full flex-col bg-black/50 py-8 pl-28">
        {children}
      </div>
    </div>
  );
}
