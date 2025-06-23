"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DynamicRenderer, { usePersonalizedDashboard } from "./DynamicRenderer";

interface DashboardProps {
  userId: string;
}

export default function Dashboard({ userId }: DashboardProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  // Get personalized dashboard configuration
  const { config, loading, error } = usePersonalizedDashboard(userId);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSidebarItemClick = (item: string) => {
    setActiveItem(item);
    // Handle navigation or state changes based on selected item
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header sidebarCollapsed={sidebarCollapsed} />
        <Sidebar
          activeItem={activeItem}
          onItemClick={handleSidebarItemClick}
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleSidebarToggle}
        />
        <main
          className={clsx(
            "pt-20 transition-all duration-300",
            sidebarCollapsed ? "pl-16" : "pl-70",
          )}
        >
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="dashboard-card animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="dashboard-card max-w-md">
          <div className="text-center text-red-600">
            <h3 className="text-lg font-semibold mb-2">
              Error Loading Dashboard
            </h3>
            <p className="text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header sidebarCollapsed={sidebarCollapsed} />

      {/* Sidebar */}
      <Sidebar
        activeItem={activeItem}
        onItemClick={handleSidebarItemClick}
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleSidebarToggle}
      />

      {/* Main Content */}
      <main
        className={clsx(
          "absolute transition-all duration-300",
          sidebarCollapsed ? "left-20" : "left-[296px]",
          "top-[100px] w-[1109px] flex-col items-start gap-7.5 h-[1909px]",
        )}
      >
        <div className="flex items-start gap-7.5 self-stretch">
          <div className="flex w-[658px] flex-col items-start gap-7.5">
            {/* Sessions Today */}
            <SessionsToday />
            {/* Upcoming Sessions */}
            <UpcomingSessions />
          </div>

          <div className="flex flex-col items-end gap-[23px] flex-1">
            {/* Calendar */}
            <CalendarWidget />
            {/* Todo List */}
            <TodoList />
          </div>
        </div>

        {/* Bottom Messages Section */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex w-[357px] px-8 py-[18px] flex-col items-start rounded-[46px] bg-[#f8f8f8] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] h-16">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-start gap-[19px]">
                <div className="relative">
                  <svg className="w-6 h-6" fill="#1D1B20" viewBox="0 0 20 21">
                    <path d="M0 20.5508V2.55078C0 2.00078 0.195833 1.52995 0.5875 1.13828C0.979167 0.746615 1.45 0.550781 2 0.550781H18C18.55 0.550781 19.0208 0.746615 19.4125 1.13828C19.8042 1.52995 20 2.00078 20 2.55078V14.5508C20 15.1008 19.8042 15.5716 19.4125 15.9633C19.0208 16.3549 18.55 16.5508 18 16.5508H4L0 20.5508ZM3.15 14.5508H18V2.55078H2V15.6758L3.15 14.5508Z" />
                  </svg>
                  <div className="absolute -top-1 -right-3 flex min-w-4 max-w-[34px] px-1 justify-center items-center rounded-full bg-[#ba1a1a]">
                    <span className="text-white text-xs font-medium">3</span>
                  </div>
                </div>
                <span className="text-black font-semibold">Messages</span>
              </div>
              <div className="flex items-center gap-[-8px]">
                <div className="w-7 h-7 rounded-full bg-gray-300 border border-white"></div>
                <div className="w-7 h-7 rounded-full bg-gray-300 border border-white -ml-2"></div>
                <div className="w-7 h-7 rounded-full bg-gray-300 border border-white -ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
