interface BlobDecorationsProps {
  count?: number
}

export function BlobDecorations({ count = 4 }: BlobDecorationsProps) {
  const blobs = [
    "w-[600px] h-[600px] -top-48 -left-48",
    "w-[500px] h-[500px] -bottom-32 -right-32",
    "w-[400px] h-[400px] top-1/2 -right-48",
    "w-[450px] h-[450px] -bottom-48 left-1/4",
  ]

  return (
    <>
      {blobs.slice(0, count).map((blob, index) => (
        <div key={`blob-${index}`} className={`blob-shape ${blob}`} aria-hidden="true" />
      ))}
    </>
  )
}
