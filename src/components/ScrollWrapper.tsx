import { ReactNode } from "react";

export function ScrollWrapper({ children }: { children: ReactNode }) {
  return (
    <div 
      className="relative z-10 bg-white rounded-t-[32px]"
      style={{
        minHeight: '100vh',
        boxShadow: '0 -40px 120px rgba(0, 0, 0, 0.3), 0 -20px 60px rgba(0, 0, 0, 0.2), 0 -10px 30px rgba(0, 0, 0, 0.15)',
      }}
    >
      {children}
    </div>
  );
}