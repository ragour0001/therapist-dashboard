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
            <DynamicRenderer
              config={{
                id: "sessions-today",
                type: "sessions-today",
                position: { row: 1, column: 1 },
                visible: true,
              }}
            />
            {/* Upcoming Sessions */}
            <div className="w-[658px] h-[600px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9151802f38222c216acd9a1edcd9a0278f779a?placeholderIfAbsent=true"
                alt="Upcoming Appointments"
                className="flex flex-col items-start gap-4 self-stretch rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-[23px] flex-1">
            {/* Calendar */}
            <DynamicRenderer
              config={{
                id: "calendar",
                type: "calendar",
                position: { row: 1, column: 2 },
                visible: true,
              }}
            />
            {/* Todo List */}
            <DynamicRenderer
              config={{
                id: "todo-list",
                type: "todo-list",
                position: { row: 2, column: 2 },
                visible: true,
              }}
            />
          </div>
        </div>

        {/* Bottom Messages Section */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                1 Messages
              </span>
              <div className="flex -space-x-2 ml-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
