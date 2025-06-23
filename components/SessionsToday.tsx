"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, ChevronDown, AlertTriangle } from "lucide-react";
import clsx from "clsx";
import { SessionsData, Client, AlertNotification } from "../types/dashboard";
import { DashboardService } from "../services/dashboard";

export default function SessionsToday() {
  const [sessionsData, setSessionsData] = useState<SessionsData | null>(null);
  const [newClients, setNewClients] = useState<Client[]>([]);
  const [alerts, setAlerts] = useState<AlertNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sessions, clients, notifications] = await Promise.all([
          DashboardService.getSessionsData(),
          DashboardService.getNewClients(),
          DashboardService.getAlertNotifications(),
        ]);

        setSessionsData(sessions);
        setNewClients(clients);
        setAlerts(notifications);
      } catch (error) {
        console.error("Error fetching sessions data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-card animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-16 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="h-2 bg-gray-200 rounded w-full mb-6"></div>
        <div className="space-y-4">
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!sessionsData) return null;

  return (
    <div className="flex p-[25px_16px] flex-col items-start gap-2.5 self-stretch rounded-xl bg-white">
      {/* Content */}
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-[25px] self-stretch">
          {/* Header Section */}
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="self-stretch text-black font-inter text-2xl font-medium leading-normal">
              Sessions for Today
            </div>
            <div className="self-stretch text-[#006b5f] font-inter text-[40px] font-bold leading-normal">
              {sessionsData.total}
            </div>
          </div>

          {/* Progress Section */}
          <div className="flex items-center gap-[23px] self-stretch">
            <div className="flex flex-col items-start gap-[14px] flex-1">
              <div className="flex items-center gap-[14px] self-stretch">
                <div className="flex items-center gap-[14px] flex-1">
                  {/* Progress Bar */}
                  <div className="w-[506px] h-1.5 flex-shrink-0 rounded-full bg-[#eee] relative">
                    <div
                      className="w-[361px] h-1.5 flex-shrink-0 rounded-full bg-[#006b5f] absolute left-0 top-0"
                      style={{
                        width: `${(sessionsData.percentage * 506) / 100}px`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="text-[#959ba3] font-inter text-base font-normal leading-5 tracking-[-0.16px]">
                {sessionsData.percentage}% complete
              </div>
            </div>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex flex-col items-end self-stretch">
          <div className="flex items-center gap-1.5">
            <div className="text-[#1a1a1a] font-inter text-base font-normal leading-[150%]">
              Today
            </div>
            <ChevronDown className="w-[37.905px] h-[37.905px] transform -rotate-90 text-[#1a1a1a] opacity-61" />
          </div>

          {/* Statistics Grid */}
          <div className="flex items-center gap-5 self-stretch">
            {sessionsData.stats.map((stat, index) => (
              <div
                key={index}
                className="flex p-[17px_21px] flex-col items-start gap-2.5 flex-1 rounded-xl"
              >
                <div className="flex flex-col items-start gap-[14px] self-stretch">
                  <div className="self-stretch text-[#3b3b3b] font-inter text-base font-medium leading-normal">
                    {stat.type}
                  </div>
                  <div className="self-stretch text-[#3b3b3b] font-inter text-2xl font-semibold leading-normal">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 aspect-square">
                      <TrendingUp className="w-5 h-5 text-[#006b5f] absolute left-0.5 top-0.5" />
                    </div>
                    <div className="text-[#006b5f] font-inter text-sm font-medium leading-normal">
                      {stat.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome New Clients Section */}
      <div className="flex p-[20px_30px_1px_30px] flex-col justify-center items-center gap-3 self-stretch rounded-[15px] border border-[#9d9d9d] bg-[#f5f5f5]">
        <div className="flex justify-between items-center self-stretch">
          <div className="w-60 text-[#303030] font-inter text-[15px] font-medium leading-6 tracking-[-0.225px]">
            <span>Welcome </span>
            <span className="text-[#8a8a8a]">291 Clients</span>
            <span> with a personal warm message 😎</span>
          </div>
          <div className="text-white font-inter text-[15px] font-bold leading-6 tracking-[-0.15px] flex p-[10px_18px] justify-center items-center gap-2 rounded-xl border border-[#616161] bg-[#303030] shadow-[0px_1px_2px_0px_rgba(255,255,255,0.40)_inset,0px_-1px_0px_0px_rgba(0,0,0,0.24),0px_1px_2px_0px_rgba(0,0,0,0.08)]">
            Send message
          </div>
        </div>

        {/* Customer Avatars */}
        <div className="flex items-start self-stretch">
          {newClients.slice(0, 4).map((client, index) => (
            <div
              key={client.id}
              className="flex p-[32px_24px] flex-col justify-center items-center gap-3 flex-1 rounded-xl"
            >
              <div className="w-16 h-16 rounded-[9999px] bg-gray-300"></div>
              <div className="text-[#303030] font-inter text-[13px] font-medium leading-4 tracking-[-0.13px]">
                {client.name}
              </div>
            </div>
          ))}
          <div className="flex p-[32px_24px] flex-col justify-center items-center gap-3 flex-1 rounded-xl">
            <div className="flex p-5 justify-center items-center rounded-[9999px] bg-[#f1f1f1]">
              <svg
                className="w-6 h-6 text-[#303030]"
                fill="currentColor"
                viewBox="0 0 25 25"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.59961 12.9055C4.59961 12.4084 5.00255 12.0055 5.49961 12.0055L17.1271 12.0055L13.8632 8.7419C13.5118 8.39044 13.5117 7.82059 13.8632 7.4691C14.2146 7.11761 14.7845 7.11759 15.136 7.46904L19.9365 12.269C20.1053 12.4378 20.2001 12.6668 20.2001 12.9055C20.2001 13.1442 20.1053 13.3731 19.9365 13.5419L15.136 18.3419C14.7845 18.6934 14.2146 18.6933 13.8632 18.3418C13.5117 17.9903 13.5118 17.4205 13.8632 17.069L17.1271 13.8055L5.49961 13.8055C5.00255 13.8055 4.59961 13.4025 4.59961 12.9055Z"
                  fill="#303030"
                />
              </svg>
            </div>
            <div className="text-[#303030] font-inter text-[13px] font-semibold leading-4 tracking-[-0.13px]">
              View all
            </div>
          </div>
        </div>
      </div>

      {/* Alert Notifications */}
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex h-[68px] min-w-[200px] p-6 flex-col justify-center items-start gap-2 self-stretch rounded-2xl border border-[#e94545] bg-[rgba(255,105,97,0.06)]"
        >
          <div className="flex justify-between items-center self-stretch">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#e94545]" />
              <div className="text-[#003a5d] font-inter text-base font-medium leading-[18px]">
                {alert.title}
              </div>
            </div>
            {alert.actionText && (
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center rounded-[100px] bg-[#006a63]">
                  <div className="text-white font-inter text-sm font-medium leading-5 tracking-[0.1px] flex p-[6px_12px] justify-center items-center gap-1">
                    {alert.actionText}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
