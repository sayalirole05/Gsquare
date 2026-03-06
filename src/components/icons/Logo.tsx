import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className={cn(className)}
      {...props}
    >
      <g transform="translate(242, 267)">
        {/* Icon */}
        <g>
          {/* Left Square */}
          <rect x="0" y="0" width="300" height="300" fill="#FF6A13" />
          <text
            x="150"
            y="150"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="190"
            fill="#FFFFFF"
            textAnchor="middle"
            dominantBaseline="central"
          >
            G
          </text>

          {/* Right Square */}
          <rect x="240" y="0" width="300" height="300" fill="#FFFFFF" stroke="#FF6A13" strokeWidth="12" />
          <text
            x="390"
            y="150"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="190"
            fill="#2F5597"
            textAnchor="middle"
            dominantBaseline="central"
          >
            G
          </text>
        </g>

        {/* Brand Text */}
        <text
          y="430"
          x="270"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="120"
          letterSpacing="6"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan fill="#FF6A13">G</tspan>
          <tspan fill="#2F5597">SQUARE</tspan>
        </text>
      </g>
    </svg>
  );
};
