"use client";

import React from "react";
import { Search, Bell, ChevronDown, Smartphone } from "lucide-react";

interface HeaderProps {
  sidebarCollapsed: boolean;
}

export default function Header({ sidebarCollapsed }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#f7f9fa] z-40">
      <div className="flex w-full h-20 px-10 py-[18px] justify-between items-center">
        {/* Logo */}
        <div className="flex px-4 flex-col items-start gap-2.5">
          <div className="w-[119px] h-[42px] aspect-[17/6]">
            <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">
                Refill Health
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar and Actions */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex w-[386px] h-14 max-w-[720px] items-center gap-1 rounded-xl bg-[#e3eae7]">
            <div className="flex p-1 items-center gap-[-16px] flex-1 self-stretch">
              <div className="flex px-5 py-0 items-center gap-2.5 flex-1 self-stretch">
                <div className="text-[#3f4947] font-inter text-base font-normal leading-6 tracking-[0.5px] opacity-60">
                  What are you looking for?
                </div>
              </div>
              <div className="flex justify-end items-center relative right-1">
                <div className="flex w-12 h-12 justify-center items-center">
                  <div className="flex w-10 flex-col justify-center items-center flex-shrink-0 rounded-[100px]">
                    <div className="flex h-10 justify-center items-center self-stretch">
                      <div className="w-6 h-6">
                        <Search className="w-[18px] h-[18px] text-[#3f4947]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Icon */}
            <div className="w-7.5 h-7.5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="#F8FCFF" />
                <circle
                  cx="15.0004"
                  cy="15.0004"
                  r="14.6"
                  stroke="#9FF2E2"
                  strokeWidth="0.8"
                />
                <path
                  d="M17.8227 7.28613H12.1797C11.0751 7.28613 10.1797 8.18156 10.1797 9.28613V20.7151C10.1797 21.8197 11.0751 22.7151 12.1797 22.7151H17.8227C18.9273 22.7151 19.8227 21.8197 19.8227 20.7151V9.28613C19.8227 8.18156 18.9273 7.28613 17.8227 7.28613Z"
                  stroke="#006B5F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4531 18.8145H14.1621"
                  stroke="#006B5F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Notification Bell */}
          <div className="w-6 h-6">
            <Bell className="w-6 h-6 text-[#006b5f]" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex w-8 h-8 flex-col justify-center items-center rounded-[100px]">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[#006b5f] font-inter text-sm font-normal leading-[150%]">
                  Johnathon Doe
                </div>
                <div className="text-[#999] font-inter text-xs font-normal leading-[135%]">
                  Therapist
                </div>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-[#006b5f]" />
          </div>
        </div>
      </div>
    </header>
  );
}
