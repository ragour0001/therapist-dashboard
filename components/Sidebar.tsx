"use client";

import React from "react";
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
        "fixed left-0 top-20 h-[calc(100vh-80px)] bg-[#f7f9fa] transition-all duration-300 ease-in-out z-50 flex flex-col",
        collapsed ? "w-20" : "w-[280px]",
      )}
    >
      {/* Navigation Items */}
      <div className="flex-1 pt-5 px-0">
        <div className="flex flex-col justify-between items-center flex-1 self-stretch">
          {/* Main Navigation */}
          <div className="flex flex-col items-center gap-3 self-stretch">
            <div className="flex flex-col items-center gap-8 self-stretch">
              <div className="flex px-[18px] flex-col items-center gap-6 self-stretch">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onItemClick(item.id);
                        // Toggle collapse when clicking dashboard
                        if (item.id === "dashboard") {
                          onToggleCollapse();
                        }
                      }}
                      className={clsx(
                        "flex w-[244px] px-[18px] py-3 items-center gap-[100px] rounded-xl cursor-pointer transition-colors",
                        isActive
                          ? "bg-[#006b5f] text-white"
                          : "text-[#666] hover:bg-gray-100",
                        collapsed && "w-12 px-3 justify-center",
                      )}
                    >
                      <div className="flex items-center gap-[18px]">
                        <div className="w-6 h-6 relative">
                          <Icon className="w-4 h-4 absolute left-1 top-1" />
                        </div>
                        {!collapsed && (
                          <div className="text-sm font-normal leading-[150%]">
                            {item.label}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom User Profile */}
          <div className="flex flex-col justify-end items-center gap-3 self-stretch">
            <div
              className={clsx(
                "flex px-3 pt-5 pb-5 pl-9 flex-col items-center gap-4 self-stretch border-t border-[#ebeff2]",
                collapsed && "px-3 pl-3",
              )}
            >
              <div className="flex w-[238px] justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="flex w-12 h-12 justify-center items-center rounded-lg bg-[#ebeff2]">
                    <div className="flex p-3 justify-center items-center gap-[18px] flex-1 self-stretch rounded-lg">
                      <div className="flex w-6 h-6 px-[3px] py-[3px] justify-center items-center">
                        <User className="w-4 h-[18px] text-[#006b5f]" />
                      </div>
                    </div>
                  </div>
                  {!collapsed && (
                    <div className="flex flex-col items-start gap-0.5">
                      <div className="text-sm font-normal leading-[150%] text-[#006b5f]">
                        Johnathon Doe
                      </div>
                      <div className="text-xs font-normal leading-[135%] text-[#999]">
                        Back-office
                      </div>
                    </div>
                  )}
                </div>
                {!collapsed && <div className="w-6 h-6 flex-shrink-0"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
