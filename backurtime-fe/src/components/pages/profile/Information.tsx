"use client";

import { NeonText, Toggle } from "@/components/common";
import { User } from "@/types/user";
import { customFetch } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import QRCode from "react-qr-code";

const PROFILE_STATISTIC = [
	{
		id: "profile-statistic-1",
		value: 0,
		title: "Missions completed",
		image: "/pages/profile/missions_completed.png",
	},
	{
		id: "profile-statistic-2",
		value: 0,
		title: "Offers completed",
		image: "/pages/profile/offers_completed.png",
	},
	{
		id: "profile-statistic-3",
		value: 0,
		title: "Draws entered",
		image: "/pages/profile/draws_entered.png",
	},
	{
		id: "profile-statistic-4",
		value: 0,
		title: "Total time earned",
		image: "/pages/profile/total_time_earned.png",
	},
	{
		id: "profile-statistic-5",
		value: 0,
		title: "Total wins",
		image: "/pages/profile/total_wins.png",
	},
	{
		id: "profile-statistic-6",
		value: "€ 0",
		title: "Total donation",
		image: "/pages/profile/total_donation.png",
	},
];

export default function ProfileInformation() {
	const { data, isLoading } = useQuery({
		queryKey: ["profileButton"],
		queryFn: () => {
			return customFetch<User>("/users/me");
		},
	});

	return (
		<div className="grid grid-cols-2 gap-x-16 rounded-[48px] border border-white/20 p-15 backdrop-blur-md">
			<div className="flex w-full flex-col rounded-[20px] bg-[#004E4F80] shadow-[inset_0_4px_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
				<div className="flex h-full w-full flex-col justify-between rounded-[20px] bg-[url(/pages/profile/stardust.webp)] bg-cover bg-center p-6">
					<div className="relative flex h-full w-full flex-col">
						<div className="absolute top-0 left-0 flex h-[194px] w-[174px] flex-col gap-y-3 rounded-[20px] bg-white/20 px-3 py-[10px] backdrop-blur-[20px]">
							<QRCode value="hey" className="size-[150px]" />
							<span className="font-inter text-center text-sm font-medium text-white">
								{/* TODO: Replace with real user id */}
								ID: 84798678
							</span>
						</div>
						<div className="relative mt-18 flex h-full w-full flex-col items-center justify-center bg-[url(/pages/profile/avatar_podium.webp)]">
							<Image
								src="/pages/profile/mock_user_avatar_full.png"
								alt="mock user avatar full"
								width={241}
								height={358}
								className="left-50% absolute top-0"
							/>
						</div>
					</div>
					<div className="flex w-full flex-col items-center justify-center gap-y-[26px] rounded-[20px] bg-[#08151D80] py-6 backdrop-blur-lg">
						<div className="flex items-center gap-x-[26px]">
							<Image
								src="/pages/profile/left_divider.png"
								alt="left divider"
								width={170}
								height={24}
							/>
							<span className="font-cinzel text-xl font-bold text-white text-shadow-[1px_6px_10.2px_rgba(212,139,32,0.6),0px_2px_4px_rgba(210,171,104,1)]">
								LV 0
							</span>
							<Image
								src="/pages/profile/right_divider.png"
								alt="right divider"
								width={170}
								height={24}
							/>
						</div>
						<Image
							src="/components/stone_progress_bar.png"
							alt="stone progress bar"
							width={400}
							height={32}
						/>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-col gap-y-8">
				<div className="flex w-full justify-between border-b border-b-white/20 pb-8">
					<div className="flex flex-col gap-y-[10px]">
						{isLoading ? (
							<span>Loading</span>
						) : (
							<NeonText
								text={data?.email || "Username"}
								className="text-[32px] font-bold"
							/>
						)}
						<span className="font-inter text-grey-light text-base font-normal">
							Member for {differenceInDays(new Date(), new Date())} days
						</span>
					</div>
					<Image
						src="/pages/profile/profile_settings_button.svg"
						alt="profile settings button"
						width={48}
						height={48}
						className="cursor-pointer"
						onClick={() => alert("In development")}
					/>
				</div>

				<div className="flex w-full flex-col gap-y-6">
					<span className="font-cinzel text-xl font-bold text-white">
						My statistic
					</span>
					<div className="grid w-full grid-cols-2 gap-x-8 gap-y-4">
						{PROFILE_STATISTIC.map((ps, index) => (
							<div
								key={ps.id}
								className="flex h-[77px] w-full items-center gap-x-5 bg-[url(/pages/profile/profile_statistic_border.webp)] bg-no-repeat px-4 py-3"
							>
								<Image
									src={ps.image}
									width={48}
									height={48}
									alt={`statistic image ${index}`}
								/>
								<div className="flex flex-col gap-y-[2px]">
									<span className="font-cinzel text-2xl font-bold text-white text-shadow-[1px_6px_10.2px_rgba(0,255,234,0.3)]">
										{ps.value}
									</span>
									<span className="font-inter text-base font-normal text-white">
										{ps.title}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex w-full flex-col gap-y-6 border-b border-b-white/20 pb-8">
					<div className="flex w-full items-center justify-between">
						<span className="font-cinzel text-xl font-bold text-white">
							My statistic
						</span>
						<button
							className="font-inter flex cursor-pointer items-center justify-center text-base font-semibold text-white"
							onClick={() => alert("In development")}
						>
							View all
						</button>
					</div>
					<div className="flex w-full items-center gap-x-5">
						<Image
							src="/pages/profile/achivements/sage.png"
							width={213}
							height={188}
							alt="sage achivement"
						/>
						<Image
							src="/pages/profile/achivements/wildfire.png"
							width={213}
							height={188}
							alt="wildfire achivement"
						/>
						<Image
							src="/pages/profile/achivements/legendary.png"
							width={213}
							height={188}
							alt="legendary achivement"
						/>
					</div>
				</div>

				<Toggle
					label={
						<div className="flex flex-col gap-y-[6px]">
							<span className="font-inter text-base font-medium text-white">
								Adds
							</span>
							<span className="text-grey-light font-inter text-base font-normal">
								Enable pop-ups on your screen and observe short ad clips to earn
								more Time daily.
							</span>
						</div>
					}
				/>
			</div>
		</div>
	);
}
