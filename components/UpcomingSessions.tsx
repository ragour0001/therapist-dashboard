"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  Phone,
  User as UserIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";
import { UpcomingSession } from "../types/dashboard";
import { DashboardService } from "../services/dashboard";

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState<UpcomingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const upcomingSessions = await DashboardService.getUpcomingSessions();
        setSessions(upcomingSessions);
      } catch (error) {
        console.error("Error fetching upcoming sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Pending
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="dashboard-card animate-pulse">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Upcoming Sessions
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by names"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-primary-500 text-white rounded-t-lg px-4 py-3">
        <div className="grid grid-cols-6 gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            Client ID
          </div>
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            Name
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Appointment Date
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Time
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Contact Number
          </div>
          <div className="flex items-center gap-2">Status</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="px-4 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="grid grid-cols-6 gap-4 items-center text-sm">
              <div className="font-medium text-gray-900">
                {session.clientId}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <UserIcon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">
                  {session.clientName}
                </span>
              </div>
              <div className="text-gray-600">{session.appointmentDate}</div>
              <div className="text-gray-600">{session.time}</div>
              <div className="text-gray-600">{session.contactNumber}</div>
              <div>{getStatusBadge(session.status)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-700">Previous</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-primary-500 text-white rounded text-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-sm">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-sm">
            3
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-sm text-gray-700">Next</span>
      </div>
    </div>
  );
}
