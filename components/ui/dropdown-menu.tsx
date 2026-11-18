"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FiChevronRight } from "react-icons/fi";

interface DropdownMenuContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null);

export function DropdownMenu({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const setOpen = React.useCallback(
    (value: React.SetStateAction<boolean>) => {
      if (typeof value === "function") {
        setUncontrolledOpen((prev) => {
          const next = value(prev);
          onOpenChange?.(next);
          return next;
        });
      } else {
        setUncontrolledOpen(value);
        onOpenChange?.(value);
      }
    },
    [onOpenChange]
  );

  const triggerRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  // Close on click outside
  React.useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        contentRef.current &&
        !contentRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  className,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenuTrigger must be inside DropdownMenu");

  return (
    <div
      ref={ctx.triggerRef}
      className={cn("inline-flex items-center cursor-pointer select-none", className)}
      aria-haspopup="true"
      aria-expanded={ctx.open}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuContent({
  children,
  className,
  align = "center",
  sideOffset = 8,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenuContent must be inside DropdownMenu");

  if (!ctx.open) return null;

  const alignClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  }[align];

  return (
    <div
      ref={ctx.contentRef}
      style={{ top: `calc(100% + ${sideOffset}px)` }}
      role="menu"
      className={cn(
        "absolute z-50 min-w-[14rem] overflow-visible rounded-2xl",
        "border border-black/[0.08] bg-white/98 p-1.5 text-zinc-800",
        "shadow-[0_12px_40px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl",
        "transition-all duration-200 ease-out origin-top",
        alignClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  inset,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean; asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<any>;
    return React.cloneElement(childElement, {
      className: cn(
        "relative flex cursor-pointer select-none items-center rounded-xl px-3.5 py-2.5 text-sm font-medium",
        "outline-none transition-colors duration-150 text-zinc-700",
        "hover:bg-orange-500/[0.08] hover:text-orange-600 focus:bg-orange-500/[0.08] focus:text-orange-600",
        inset && "pl-8",
        childElement.props.className,
        className
      ),
      role: "menuitem",
    });
  }

  return (
    <div
      role="menuitem"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-xl px-3.5 py-2.5 text-sm font-medium",
        "outline-none transition-colors duration-150 text-zinc-700",
        "hover:bg-orange-500/[0.08] hover:text-orange-600 focus:bg-orange-500/[0.08] focus:text-orange-600",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn("-mx-1 my-1.5 h-px bg-black/[0.06]", className)}
      {...props}
    />
  );
}

// ── Submenu components ──

interface DropdownMenuSubContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenuSubContext = React.createContext<DropdownMenuSubContextType | null>(null);

export function DropdownMenuSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  return (
    <DropdownMenuSubContext.Provider value={{ open, setOpen }}>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </DropdownMenuSubContext.Provider>
  );
}

export function DropdownMenuSubTrigger({
  children,
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  const ctx = React.useContext(DropdownMenuSubContext);

  return (
    <div
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={ctx?.open}
      className={cn(
        "flex cursor-pointer select-none items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium",
        "outline-none transition-colors duration-150 text-zinc-700",
        ctx?.open
          ? "bg-orange-500/[0.08] text-orange-600"
          : "hover:bg-orange-500/[0.08] hover:text-orange-600",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <FiChevronRight size={14} className="ml-auto opacity-50" />
    </div>
  );
}

export function DropdownMenuSubContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(DropdownMenuSubContext);
  if (!ctx || !ctx.open) return null;

  return (
    <div
      role="menu"
      className={cn(
        "absolute left-[calc(100%+6px)] top-0 z-50 min-w-[13rem] overflow-hidden rounded-2xl",
        "border border-black/[0.08] bg-white/98 p-1.5 text-zinc-800",
        "shadow-[0_12px_40px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl",
        "transition-all duration-200 ease-out origin-top-left",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
