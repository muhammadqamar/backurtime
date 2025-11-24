import ProfileButton from "./ProfileButton";

interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return (
    <div className="flex w-full items-center justify-between px-[70px]">
      <span className="font-inter text-2xl font-semibold text-white">
        {title}
      </span>
      <ProfileButton />
    </div>
  );
}
