interface TechDotsProps {
  className?: string
}

export function TechDots({ className = '' }: TechDotsProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(37,211,102,0.35)_1px,transparent_1px)] [background-size:64px_64px] ${className}`}
    />
  )
}
