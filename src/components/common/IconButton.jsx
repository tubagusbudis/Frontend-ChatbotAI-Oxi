import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function IconButton({ icon, label, variant = "ghost", className, ...props }) {
  const baseClasses = "flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50";
  
  const variants = {
    ghost: "text-white/70 hover:text-white hover:bg-white/10",
    glass: "frosted-glass frosted-glass-hover text-white/80 hover:text-white",
    primary: "bg-brand-greenSubmit hover:bg-green-400 text-black shadow-lg shadow-brand-greenSubmit/20",
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      aria-label={label}
      title={label}
      {...props}
    >
      {icon}
    </button>
  );
}
