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
    <div className="dashboard-card">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Sessions for Today
        </h2>
        <div className="text-4xl font-bold text-primary-500 mb-6">
          {sessionsData.total}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="progress-bar mb-3">
            <div
              className="progress-fill"
              style={{ width: `${sessionsData.percentage}%` }}
            ></div>
          </div>
          <div className="text-gray-500 text-sm">
            {sessionsData.percentage}% complete
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <span>Today</span>
            <ChevronDown className="w-4 h-4 transform -rotate-90" />
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {sessionsData.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="text-gray-700 font-medium text-base">
                {stat.type}
              </div>
              <div className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-medium text-primary-500">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome New Clients Section */}
      <div className="bg-gray-100 rounded-2xl border border-gray-400 p-5 mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-gray-800 font-medium text-sm">
            <span>Welcome </span>
            <span className="text-gray-500">291 Clients</span>
            <span> with a personal warm message 😎</span>
          </div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-bold border border-gray-600 shadow-sm">
            Send message
          </button>
        </div>

        {/* Client Avatars */}
        <div className="flex">
          {newClients.slice(0, 4).map((client, index) => (
            <div key={client.id} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-3"></div>
              <div className="text-xs font-medium text-gray-800 text-center">
                {client.name}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-3 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-gray-800 text-center">
              View all
            </div>
          </div>
        </div>
      </div>

      {/* Alert Notifications */}
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex items-center justify-between p-6 rounded-2xl border border-red-500 bg-red-50"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <span className="text-gray-900 font-medium">{alert.title}</span>
          </div>
          {alert.actionText && (
            <button className="bg-primary-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
              {alert.actionText}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
