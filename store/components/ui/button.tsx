import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition",
        disabled && "opacity-75 cursor-default",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
