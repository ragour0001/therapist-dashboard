"use client";

import React, { useState } from "react";
import {
  Home,
  Calendar,
  Users,
  MessageSquare,
  FileText,
  BookOpen,
  Settings,
  HelpCircle,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "clients", label: "Client", icon: Users },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "notes", label: "Notes", icon: FileText },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "help", label: "Need Help", icon: HelpCircle },
];

export default function Sidebar({
  activeItem,
  onItemClick,
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-20 h-[calc(100vh-80px)] bg-gray-50 transition-all duration-300 ease-in-out z-50 flex flex-col",
        collapsed ? "w-16" : "w-70",
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Navigation Items */}
      <div className="flex-1 px-5 py-6">
        <nav className="space-y-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={clsx(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary-500 text-white"
                    : "text-gray-600 hover:bg-gray-100",
                  collapsed && "px-3 justify-center",
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon
                  className={clsx(
                    "flex-shrink-0",
                    collapsed ? "w-5 h-5" : "w-6 h-6",
                  )}
                />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section */}
      <div
        className={clsx("border-t border-gray-200 p-5", collapsed && "px-3")}
      >
        <div
          className={clsx(
            "flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200",
            collapsed && "justify-center p-2",
          )}
        >
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-primary-500" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-primary-600 truncate">
                Johnathon Doe
              </div>
              <div className="text-xs text-gray-500 truncate">Back-office</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
