interface StatCardProps {
  count: string
  label: string
}

export function StatCard({ count, label }: StatCardProps) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">{count}</div>
      <p className="text-sm text-foreground/70 leading-relaxed">{label}</p>
    </div>
  )
}
