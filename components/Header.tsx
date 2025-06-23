"use client";

import React from "react";
import { Search, Bell, ChevronDown, Smartphone } from "lucide-react";
import clsx from "clsx";

interface HeaderProps {
  sidebarCollapsed: boolean;
}

export default function Header({ sidebarCollapsed }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gray-50 border-b border-gray-200 z-40">
      <div className="h-full px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-30 h-10 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">
              Refill Health
            </span>
          </div>
        </div>

        {/* Search Bar and Actions */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-96">
            <div className="flex items-center bg-gray-200 rounded-xl h-14 px-5">
              <div className="flex-1 flex items-center">
                <span className="text-gray-600 text-base opacity-60">
                  What are you looking for?
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-300 rounded-full transition-colors">
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
                <div className="w-8 h-8 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-primary-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Notification Bell */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-primary-500" />
          </button>

          {/* Profile Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="text-right">
                <div className="text-sm font-medium text-primary-600">
                  Johnathon Doe
                </div>
                <div className="text-xs text-gray-500">Therapist</div>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-primary-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
