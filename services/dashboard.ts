import {
  User,
  UserPersona,
  SessionsData,
  CalendarEvent,
  TodoItem,
  Client,
  AlertNotification,
  UpcomingSession,
} from "../types/dashboard";

// Mock API service - replace with actual API calls
export class DashboardService {
  static async getUserPersona(userId: string): Promise<UserPersona> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id: "persona-1",
      name: "Senior Therapist",
      preferences: {
        dashboardLayout: {
          sidebar: {
            collapsed: false,
            visibleItems: [
              "dashboard",
              "calendar",
              "clients",
              "messages",
              "notes",
              "resources",
              "settings",
              "help",
            ],
          },
          mainContent: {
            columns: 2,
            widgets: [
              {
                id: "sessions-today",
                type: "sessions-today",
                position: { row: 1, column: 1, span: 2 },
                visible: true,
              },
              {
                id: "calendar",
                type: "calendar",
                position: { row: 2, column: 2 },
                visible: true,
              },
              {
                id: "todo-list",
                type: "todo-list",
                position: { row: 3, column: 2 },
                visible: true,
              },
            ],
          },
        },
        priorityMetrics: ["sessions", "clients", "calendar"],
        widgetConfiguration: [],
      },
    };
  }

  static async getSessionsData(): Promise<SessionsData> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      total: 57,
      completed: 37,
      percentage: 65,
      stats: [
        { type: "No. of sessions", value: 24, change: "+5.11%", trend: "up" },
        { type: "Completion rate", value: 24, change: "+5.11%", trend: "up" },
        {
          type: "Client satisfaction",
          value: 24,
          change: "+5.11%",
          trend: "up",
        },
      ],
    };
  }

  static async getCalendarEvents(): Promise<CalendarEvent[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: "1",
        date: "2024-04-23",
        title: "session with Olivia",
        time: "12:00 pm",
        type: "session",
        clientName: "Olivia",
      },
      {
        id: "2",
        date: "2024-04-23",
        title: "slot available",
        time: "1:00 pm",
        type: "available",
      },
      {
        id: "3",
        date: "2024-04-23",
        title: "session with Olivia",
        time: "2:00 pm",
        type: "session",
        clientName: "Olivia",
      },
    ];
  }

  static async getTodoItems(): Promise<TodoItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: "1",
        title: "Send assignment to JhonD",
        completed: false,
        priority: "high",
      },
      {
        id: "2",
        title: "Update Notes For Jhon",
        completed: false,
        priority: "medium",
      },
      {
        id: "3",
        title: "Update Notes For Jhon",
        completed: false,
        priority: "medium",
      },
      {
        id: "4",
        title: "Update Notes For Jhon",
        completed: false,
        priority: "low",
      },
      {
        id: "5",
        title: "Update Notes For Jhon",
        completed: false,
        priority: "low",
      },
    ];
  }

  static async getNewClients(): Promise<Client[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: "1",
        name: "Courtney Henry",
        avatar: "/avatars/courtney.jpg",
        isNew: true,
      },
      {
        id: "2",
        name: "Courtney Henry",
        avatar: "/avatars/courtney2.jpg",
        isNew: true,
      },
      {
        id: "3",
        name: "Jenny Wilson",
        avatar: "/avatars/jenny.jpg",
        isNew: true,
      },
      {
        id: "4",
        name: "Cameron Williamson",
        avatar: "/avatars/cameron.jpg",
        isNew: true,
      },
    ];
  }

  static async getAlertNotifications(): Promise<AlertNotification[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: "1",
        type: "warning",
        title: "Two Patients Needs Immediate attention",
        message: "Please review and take necessary action",
        actionText: "Review",
        urgent: true,
      },
    ];
  }

  static async getUpcomingSessions(): Promise<UpcomingSession[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: "1",
        clientId: "#123",
        clientName: "Lorem Ipsum",
        clientAvatar: "/avatars/client1.jpg",
        appointmentDate: "14/06/2025",
        time: "08:00 AM - 08:30AM",
        contactNumber: "+91 00000 00000",
        status: "completed",
      },
      {
        id: "2",
        clientId: "#123",
        clientName: "Lorem Ipsum",
        clientAvatar: "/avatars/client2.jpg",
        appointmentDate: "14/06/2025",
        time: "08:00 AM - 08:30AM",
        contactNumber: "+91 00000 00000",
        status: "pending",
      },
      {
        id: "3",
        clientId: "#123",
        clientName: "Lorem Ipsum",
        clientAvatar: "/avatars/client3.jpg",
        appointmentDate: "14/06/2025",
        time: "08:00 AM - 08:30AM",
        contactNumber: "+91 00000 00000",
        status: "completed",
      },
      {
        id: "4",
        clientId: "#123",
        clientName: "Lorem Ipsum",
        clientAvatar: "/avatars/client4.jpg",
        appointmentDate: "14/06/2025",
        time: "08:00 AM - 08:30AM",
        contactNumber: "+91 00000 00000",
        status: "pending",
      },
    ];
  }
}
