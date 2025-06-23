export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  persona: UserPersona;
}

export interface UserPersona {
  id: string;
  name: string;
  preferences: {
    dashboardLayout: DashboardLayout;
    priorityMetrics: string[];
    widgetConfiguration: WidgetConfig[];
  };
}

export interface DashboardLayout {
  sidebar: {
    collapsed: boolean;
    visibleItems: string[];
  };
  mainContent: {
    columns: number;
    widgets: ComponentConfig[];
  };
}

export interface ComponentConfig {
  id: string;
  type: ComponentType;
  position: {
    row: number;
    column: number;
    span?: number;
  };
  props?: Record<string, any>;
  visible: boolean;
}

export interface WidgetConfig {
  id: string;
  name: string;
  enabled: boolean;
  settings: Record<string, any>;
}

export type ComponentType =
  | "sessions-today"
  | "calendar"
  | "todo-list"
  | "welcome-clients"
  | "alert-notification"
  | "upcoming-sessions"
  | "next-session"
  | "statistics-overview";

export interface SessionsData {
  total: number;
  completed: number;
  percentage: number;
  stats: {
    type: string;
    value: number;
    change: string;
    trend: "up" | "down";
  }[];
}

export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  time: string;
  type: "session" | "available" | "holiday" | "leave";
  clientName?: string;
}

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

export interface Client {
  id: string;
  name: string;
  avatar?: string;
  isNew?: boolean;
}

export interface AlertNotification {
  id: string;
  type: "warning" | "info" | "success" | "error";
  title: string;
  message: string;
  actionText?: string;
  urgent?: boolean;
}

export interface UpcomingSession {
  id: string;
  clientId: string;
  clientName: string;
  clientAvatar?: string;
  appointmentDate: string;
  time: string;
  contactNumber: string;
  status: "completed" | "pending" | "cancelled";
}
