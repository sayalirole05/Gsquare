import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M14.5 9.5a3 3 0 1 0 0 5" />
      <path d="M14.5 14.5H12c-2.21 0-4-1.79-4-4v0c0-2.21 1.79-4 4-4h2.5" />
    </svg>
  );
};
