interface TechGridProps {
  className?: string
  opacityClassName?: string
}

export function TechGrid({ className = '', opacityClassName = 'opacity-40' }: TechGridProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${opacityClassName} [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px] ${className}`}
    />
  )
}
