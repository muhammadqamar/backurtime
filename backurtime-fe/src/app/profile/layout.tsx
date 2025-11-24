import { Navbar } from "@/components/common";

export default function ProfileLayout({ children }: LayoutProps<"/profile">) {
  return (
    <div className="bg-black-normal min-h-dvh w-full bg-[url(/pages/profile/profile_bg.webp)] bg-contain bg-no-repeat">
      <Navbar />
      <div className="flex min-h-dvh w-full flex-col bg-black/50 py-8 pl-28">
        {children}
      </div>
    </div>
  );
}
