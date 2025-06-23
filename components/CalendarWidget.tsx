"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { CalendarEvent } from "../types/dashboard";
import { DashboardService } from "../services/dashboard";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Sample calendar data for April 2024
const calendarDays = [
  { date: 1, events: ["session", "available", "holiday"] },
  { date: 2, events: ["session", "available", "holiday"] },
  { date: 3, events: ["session", "available"] },
  { date: 4, events: ["session", "available", "holiday"] },
  { date: 5, events: ["session", "available", "holiday"] },
  { date: 6, events: ["holiday"] },
  { date: 7, events: ["session", "available"] },
  { date: 8, events: [] },
  { date: 9, events: ["session", "available", "holiday"] },
  { date: 10, events: ["session", "available", "holiday"] },
  { date: 11, events: ["session", "available"] },
  { date: 12, events: [] },
  { date: 13, events: ["holiday"] },
  { date: 14, events: ["session", "available", "holiday"] },
  { date: 15, events: ["session", "available"] },
  { date: 16, events: [] },
  { date: 17, events: ["session", "available"] },
  { date: 18, events: ["session", "available", "holiday"] },
  { date: 19, events: ["session", "available"] },
  { date: 20, events: ["holiday"] },
  { date: 21, events: ["session", "available", "holiday"] },
  { date: 22, events: ["session", "available", "holiday"] },
  { date: 23, events: ["session", "available"] },
  { date: 24, events: ["leave"] },
  { date: 25, events: [] },
  { date: 26, events: [] },
  { date: 27, events: ["holiday"] },
  { date: 28, events: [] },
  { date: 29, events: [] },
  { date: 30, events: [] },
];

const eventColors = {
  session: "#337E89",
  available: "#3B82F6",
  holiday: "#B0B0B0",
  leave: "#FFAE00",
};

const filterLegend = [
  { type: "session", label: "Booked", color: "#337E89" },
  { type: "available", label: "Available slot", color: "#3B82F6" },
  { type: "holiday", label: "Holiday", color: "#B0B0B0" },
  { type: "leave", label: "On leave", color: "#FFAE00" },
];

export default function CalendarWidget() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("Wed Apr 23,2024");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const calendarEvents = await DashboardService.getCalendarEvents();
        setEvents(calendarEvents);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderEventDots = (dayEvents: string[]) => {
    return (
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {dayEvents.slice(0, 3).map((eventType, index) => (
          <div
            key={index}
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor:
                eventColors[eventType as keyof typeof eventColors],
            }}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="dashboard-card animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card">
      {/* Calendar Header */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Calendar</h3>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-base font-medium text-gray-900">April 2024</span>
        <button className="p-2 hover:bg-gray-100 rounded-full bg-primary-50">
          <ChevronRight className="w-5 h-5 text-primary-500" />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-900 py-2 uppercase"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {/* Empty cells for days before month starts */}
        <div></div>

        {/* Calendar Days */}
        {calendarDays.map((day) => (
          <div key={day.date} className="relative">
            <button
              className={`w-11 h-11 rounded-full flex items-center justify-center text-base font-medium relative ${
                day.date === 23
                  ? "bg-[rgba(0,107,95,0.10)] text-[#006b5f] font-semibold"
                  : "text-[rgba(26,26,26,0.61)] hover:bg-gray-100"
              }`}
            >
              {day.date}
              {day.events.length > 0 && renderEventDots(day.events)}
            </button>
          </div>
        ))}
      </div>

      {/* Event Type Legend */}
      <div className="flex flex-wrap gap-6 mb-6">
        {filterLegend.map((filter) => (
          <div
            key={filter.type}
            className="flex items-center gap-2 bg-gray-100 px-2 py-1.5 rounded border border-gray-300"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: filter.color }}
            />
            <span className="text-sm text-gray-600">{filter.label}</span>
          </div>
        ))}
      </div>

      {/* Selected Date Events */}
      <div className="flex flex-col items-start gap-4">
        <h4 className="w-[365px] text-[#1a1a1a] font-inter text-xl font-semibold leading-[150%]">
          Wed Apr 23,2024
        </h4>

        <div className="flex flex-col items-start gap-[14px]">
          <div className="flex w-[365px] flex-col items-start gap-2.5">
            <div className="flex px-[7px] py-[6px] justify-between items-center self-stretch rounded-[9px] border border-[#2dd4bf] bg-[rgba(45,212,191,0.10)]">
              <div className="text-[#1a1a1a] font-inter text-base font-normal leading-[150%]">
                session with Olivia
              </div>
              <div className="text-[#2dd4bf] font-inter text-base font-normal leading-[150%]">
                12:00 pm
              </div>
            </div>
            <div className="flex px-[7px] py-[6px] justify-between items-center self-stretch rounded-[9px] border border-[#3b82f6] bg-[rgba(59,130,246,0.10)]">
              <div className="text-[#1a1a1a] font-inter text-base font-normal leading-[150%]">
                slot available
              </div>
              <div className="text-[#3b82f6] font-inter text-base font-normal leading-[150%]">
                1:00 pm
              </div>
            </div>
            <div className="flex px-[7px] py-[6px] justify-between items-center self-stretch rounded-[9px] border border-[#2dd4bf] bg-[rgba(45,212,191,0.10)]">
              <div className="text-[#1a1a1a] font-inter text-base font-normal leading-[150%]">
                session with Olivia
              </div>
              <div className="text-[#2dd4bf] font-inter text-base font-normal leading-[150%]">
                12:00 pm
              </div>
            </div>
          </div>
          <div className="w-[365px] text-[#888] font-inter text-[15px] font-medium leading-[150%]">
            2 more....
          </div>
        </div>
      </div>
    </div>
  );
}
