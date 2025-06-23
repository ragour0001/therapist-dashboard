"use client";

import React, { useEffect, useState } from "react";
import { UpcomingSession } from "../types/dashboard";
import { DashboardService } from "../services/dashboard";

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState<UpcomingSession[]>([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <div className="flex flex-col items-start gap-7 self-stretch animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-64 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-7 self-stretch">
      {/* Header */}
      <div className="flex justify-between items-center self-stretch">
        <div className="flex w-[504px] h-12 flex-col justify-center text-[#006b5f] font-inter text-xl font-bold leading-[19px]">
          Upcoming Sessions
        </div>
        <div className="flex w-[292px] justify-center items-center">
          <div className="flex h-14 items-center gap-1 flex-1 rounded-[28px] bg-[#dde4e2]">
            <div className="flex px-1 items-center gap-[-16px] flex-1 self-stretch">
              <div className="flex px-5 py-0 items-center gap-2.5 flex-1 self-stretch">
                <div className="text-[#3f4947] font-inter text-base font-normal leading-6 tracking-[0.5px]">
                  Search by names
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col justify-end items-end gap-[13px] self-stretch rounded-lg">
        <div className="flex flex-col items-start self-stretch">
          {/* Table Header */}
          <div className="flex items-center self-stretch">
            <div className="flex px-[22px] py-0 justify-center items-center gap-2.5 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  d="M1.33398 10.739C1.69189 11.2175 2.14852 11.6134 2.67289 11.8999C3.19726 12.1864 3.77712 12.3568 4.37312 12.3995C4.96912 12.4421 5.56734 12.3561 6.12718 12.1473C6.68703 11.9385 7.19542 11.6117 7.61786 11.1891L10.1181 8.68886C10.8771 7.90295 11.2971 6.85035 11.2876 5.75777C11.2782 4.66519 10.8399 3.62005 10.0673 2.84745C9.29471 2.07485 8.24957 1.6366 7.15699 1.62711C6.06441 1.61762 5.01181 2.03763 4.2259 2.79669L2.79244 4.22181"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-24 text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Client ID
              </div>
            </div>
            <div className="flex px-[22px] py-0 justify-center items-center gap-2.5 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 16 8"
                fill="none"
              >
                <path
                  d="M14.6704 6.40472V4.73792C14.6704 3.85378 14.3192 3.00587 13.694 2.38069C13.0688 1.75552 12.2209 1.4043 11.3368 1.4043H4.66956C3.78543 1.4043 2.93751 1.75552 2.31233 2.38069C1.68716 3.00587 1.33594 3.85378 1.33594 4.73792V6.40472"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.00295 8.07231C6.84427 8.07231 8.33695 6.57962 8.33695 4.7383C8.33695 2.89698 6.84427 1.4043 5.00295 1.4043C3.16163 1.4043 1.66895 2.89698 1.66895 4.7383C1.66895 6.57962 3.16163 8.07231 5.00295 8.07231Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Name
              </div>
            </div>
            <div className="flex w-60 px-[22px] py-0 justify-center items-center gap-2.5 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M14.3373 1.23828H2.66972C1.74918 1.23828 1.00293 1.98453 1.00293 2.90507V14.5726C1.00293 15.4932 1.74918 16.2394 2.66972 16.2394H14.3373C15.2578 16.2394 16.0041 15.4932 16.0041 14.5726V2.90507C16.0041 1.98453 15.2578 1.23828 14.3373 1.23828Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.00293 1.23828H16.0041"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.836914 1.57031V4.90432"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.16992 1.57031V4.90432"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Appointment Date
              </div>
            </div>
            <div className="flex px-[22px] py-0 justify-center items-center gap-2.5 flex-1 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 14 2"
                fill="none"
              >
                <path
                  d="M1.66797 0.90625H12.5022"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 0.90625H1.51"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66797 0.904297H12.5022"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 0.904297H1.51"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66797 0.904297H12.5022"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 0.904297H1.51"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Time
              </div>
            </div>
            <div className="flex px-[22px] py-0 justify-center items-center gap-2.5 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.99608 1.57031L12.5713 6.78738L18.33 7.62911L14.1631 11.6878L15.1465 17.4215L9.99608 14.713L4.84569 17.4215L5.82909 11.6878L1.66211 7.62911L7.42088 6.78738L9.99608 1.57031Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Contact Number
              </div>
            </div>
            <div className="flex px-[22px] py-0 justify-center items-center gap-2.5 bg-[#006b5f]">
              <svg
                className="w-5 h-5 stroke-[#dbdbdb] stroke-[1.667]"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M0.998047 0.90625V4.24025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.53125 1.43945L3.89006 3.79826"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.10742 3.79826L3.46623 1.43945"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.998047 0.904297H4.33205"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66406 0.904297H4.99807"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.53125 3.37248L3.89006 1.01367"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.10742 1.01367L3.46623 3.37248"
                  stroke="#006B5F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.998047 1.57031V4.90432"
                  stroke="#006B5F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#fcfcfc] font-inter text-xl font-medium leading-normal">
                Status
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {sessions.map((session, index) => (
            <div key={session.id} className="flex items-center self-stretch">
              <div className="flex w-[170px] h-[82px] px-[22px] py-0 justify-center items-center gap-2.5 bg-[#fcfcfc]">
                <div className="text-[#222] font-inter text-base font-medium leading-normal">
                  #123
                </div>
              </div>
              <div className="flex w-[197px] h-[82px] px-3 py-[22px] items-center gap-2.5 bg-[#fcfcfc]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#9ff2e2] bg-gray-300"></div>
                  <div className="text-black font-inter text-base font-medium leading-normal">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="flex w-[147px] h-[82px] px-[22px] py-0 items-center gap-2.5 bg-[#fcfcfc]">
                <div className="text-black font-inter text-base font-medium leading-normal">
                  14/06/2025
                </div>
              </div>
              <div className="flex w-[235px] h-[82px] px-3 py-[22px] justify-center items-center gap-2.5 bg-[#fcfcfc]">
                <div className="text-black font-inter text-base font-medium leading-normal">
                  08:00 AM - 08:30AM
                </div>
              </div>
              <div className="flex w-[222px] h-[82px] px-[22px] py-0 items-center gap-2.5 bg-[#fcfcfc]">
                <div className="text-black font-inter text-base font-medium leading-normal">
                  +91 00000 00000
                </div>
              </div>
              <div className="flex h-[82px] px-3 py-[22px] justify-center items-center gap-2.5 flex-1 bg-[#fcfcfc]">
                <div
                  className={`flex w-[101px] h-[38px] px-3 py-1 justify-center items-center gap-2.5 rounded-md ${
                    session.status === "completed"
                      ? "bg-[#c4feb6]"
                      : "bg-[#ffdad6]"
                  }`}
                >
                  <div
                    className={`font-inter text-base font-medium leading-normal ${
                      session.status === "completed"
                        ? "text-[#222]"
                        : "text-[#ba1a1a]"
                    }`}
                  >
                    {session.status === "completed" ? "Completed" : "Pending"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3">
          <div className="text-[#9e9e9e] font-inter text-sm font-medium leading-normal">
            Previous
          </div>
          <div className="flex px-2 py-2 items-center gap-1 rounded-lg bg-[#006b5f]">
            <div className="w-3 h-4 text-white text-center font-montserrat text-xs font-medium leading-normal">
              1
            </div>
          </div>
          <div className="flex px-2 py-2 items-center gap-1 rounded-lg bg-[#e0e0e0]">
            <div className="w-3 h-4 text-black text-center font-montserrat text-xs font-medium leading-normal">
              2
            </div>
          </div>
          <div className="flex px-2 py-2 items-center gap-1 rounded-lg bg-[#e0e0e0]">
            <div className="w-3 h-4 text-black text-center font-montserrat text-xs font-medium leading-normal">
              3
            </div>
          </div>
          <div className="text-black font-montserrat text-xs font-medium leading-normal">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
