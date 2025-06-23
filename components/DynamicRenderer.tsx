"use client";

import React, { Suspense } from "react";
import { ComponentConfig, ComponentType } from "../types/dashboard";
import SessionsToday from "./SessionsToday";
import CalendarWidget from "./CalendarWidget";
import TodoList from "./TodoList";
import UpcomingSessions from "./UpcomingSessions";

// Component registry for dynamic rendering
const componentRegistry: Record<ComponentType, React.ComponentType<any>> = {
  "sessions-today": SessionsToday,
  calendar: CalendarWidget,
  "todo-list": TodoList,
  "welcome-clients": () => <div>Welcome Clients Component</div>, // Placeholder
  "alert-notification": () => <div>Alert Notification Component</div>, // Placeholder
  "upcoming-sessions": UpcomingSessions,
  "next-session": () => <div>Next Session Component</div>, // Placeholder
  "statistics-overview": () => <div>Statistics Overview Component</div>, // Placeholder
};

interface DynamicRendererProps {
  config: ComponentConfig;
  className?: string;
}

// Loading fallback component
function ComponentSkeleton() {
  return (
    <div className="dashboard-card animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default function DynamicRenderer({
  config,
  className,
}: DynamicRendererProps) {
  // Don't render if not visible
  if (!config.visible) {
    return null;
  }

  // Get component from registry
  const Component = componentRegistry[config.type];

  if (!Component) {
    console.warn(`Component type "${config.type}" not found in registry`);
    return (
      <div className="dashboard-card">
        <div className="text-center text-gray-500 py-8">
          Component "{config.type}" not implemented
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        gridRow: `${config.position.row} / span ${config.position.span || 1}`,
        gridColumn: `${config.position.column} / span ${config.position.span || 1}`,
      }}
    >
      <Suspense fallback={<ComponentSkeleton />}>
        <Component {...(config.props || {})} />
      </Suspense>
    </div>
  );
}

// Hook for personalized dashboard configuration
export function usePersonalizedDashboard(userId: string) {
  const [config, setConfig] = React.useState<ComponentConfig[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPersonalizedConfig = async () => {
      try {
        setLoading(true);
        // This would come from your persona service
        const defaultConfig: ComponentConfig[] = [
          {
            id: "sessions-today",
            type: "sessions-today",
            position: { row: 1, column: 1, span: 2 },
            visible: true,
          },
          {
            id: "upcoming-sessions",
            type: "upcoming-sessions",
            position: { row: 2, column: 1, span: 2 },
            visible: true,
          },
          {
            id: "calendar",
            type: "calendar",
            position: { row: 1, column: 2 },
            visible: true,
          },
          {
            id: "todo-list",
            type: "todo-list",
            position: { row: 2, column: 2 },
            visible: true,
          },
        ];

        setConfig(defaultConfig);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load dashboard configuration",
        );
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchPersonalizedConfig();
    }
  }, [userId]);

  return { config, loading, error, setConfig };
}
