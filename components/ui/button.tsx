import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "Default"
    | "Destructive"
    | "Outline"
    | "Secondary"
    | "Link"
    | "Ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const variantClassNames = {
  Default: "bg-primary text-primary-foreground hover:bg-primary/80",
  Destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  Outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  Secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  Link: "underline-offset-4 hover:underline text-primary",
  Ghost: "hover:bg-gray-100 dark:hover:bg-gray-700",
};

const sizeClassNames = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "default",
  children,
  className,
  ...rest
}) => {
  const variantClassName = variantClassNames[variant];
  const sizeClassName = sizeClassNames[size];

  const buttonClassNames = `${variantClassName} ${sizeClassName} ${
    className || ""
  }`.trim();

  return (
    <button type="button" className={buttonClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
