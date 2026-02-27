import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 225 110"
      className={cn(className)}
      {...props}
    >
        <rect x="0" y="0" width="225" height="110" fill="#f39c12"/>
        <text x="20" y="90" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="90" fill="white">G</text>
        <rect x="115" y="5" width="105" height="100" fill="white"/>
        <text x="130" y="90" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="90" fill="#2c3e50">G</text>
    </svg>
  );
};
