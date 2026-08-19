import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/90' : 'border-b border-transparent bg-ink/30'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <span className="font-display text-lg font-bold tracking-[0.2em] text-fg">
          AXI<span className="text-green">O</span>N
        </span>
      </div>
    </header>
  )
}
