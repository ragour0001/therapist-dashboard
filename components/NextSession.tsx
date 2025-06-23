"use client";

import React from "react";
import { Calendar, Clock, FileText, Upload } from "lucide-react";

export default function NextSession() {
  return (
    <div className="bg-[#006b5f] rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Next session</h3>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z" />
        </svg>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">D</span>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Denzel White</h4>
          <p className="text-blue-200 text-sm">Follow Up Session</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
            Starts in 1 hr
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
            Join Now
          </button>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5" />
          <div>
            <div className="font-medium">Appointments Date & Time</div>
            <div className="text-blue-200 text-sm">
              Mon, 11 June 2024 11:00 AM - 12:00 PM
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5" />
          <div>
            <div className="font-medium">Client Assessment Summary</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">😟</span>
          </div>
          <div>
            <span className="font-medium">Symptoms of </span>
            <span className="text-yellow-300">Anxiety</span>
            <span className="font-medium"> and </span>
            <span className="text-yellow-300">Burnout</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-xs">😴</span>
          </div>
          <div className="font-medium">Showing signs of sleep disturbancee</div>
        </div>
      </div>

      {/* User Report */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900">User report</div>
            <div className="text-sm text-gray-500">2.4 MB</div>
          </div>
          <Upload className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 py-3 bg-white bg-opacity-20 rounded-lg font-medium">
          Review history
        </button>
        <button className="flex-1 py-3 bg-white bg-opacity-20 rounded-lg font-medium">
          Client Notes(3)
        </button>
      </div>
    </div>
  );
}
