import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 245 125"
      className={cn(className)}
      {...props}
    >
      <g transform="translate(42.5, 0)">
        <rect x="0" y="0" width="80" height="70" fill="#f39c12"/>
        <text x="15" y="58" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="55" fill="white">G</text>
        
        <rect x="80" y="0" width="80" height="70" fill="white" stroke="#f39c12" strokeWidth="3"/>
        <text x="95" y="58" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="55" fill="#2c3e50">G</text>
      </g>
      
      <text x="40" y="110" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="40">
        <tspan fill="#f39c12">G</tspan>
        <tspan fill="#2c3e50">SQUARE</tspan>
      </text>
    </svg>
  );
};
