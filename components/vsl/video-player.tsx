export function VideoPlayer() {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div
        className="relative w-full rounded-lg overflow-hidden bg-black shadow-xl"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Sro6nOXiEkE?si=rnOVaG3kfDTj207Z&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&vq=hd1080"
          title="VSL Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}
