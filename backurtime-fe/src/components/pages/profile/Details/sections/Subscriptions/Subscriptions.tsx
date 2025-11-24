import { Groups } from "@/components/common";
import { useState } from "react";
import EmptyState from "./components/EmptyState";

const SUBSCRIPTIONS_SECTION_GROUPS = [
  {
    id: "subscriptions-section-group-1",
    title: "Subscription owner",
    name: "subscription_owner",
  },
  {
    id: "subscriptions-section-group-2",
    title: "Subscriber",
    name: "subscriber",
  },
];

export default function SubscriptionsSection() {
  const [currentGroup, setCurrentGroup] = useState("subscription_owner");

  return (
    <div className="flex w-full flex-col gap-y-8">
      <div className="flex flex-col gap-y-[10px]">
        <span className="font-inter text-lg font-medium text-white">
          Manage subscriptions
        </span>
        <span className="text-grey-light font-inter text-base font-normal">
          Manage active subscriptions, members, check payment history.
        </span>
      </div>
      <div className="flex w-full flex-col gap-y-6">
        <Groups
          groups={SUBSCRIPTIONS_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />
      </div>
      <EmptyState />
    </div>
  );
}
