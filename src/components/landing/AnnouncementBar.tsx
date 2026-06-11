export function AnnouncementBar() {
  return (
    <div className="relative z-50 flex items-center justify-center gap-2 bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground sm:text-sm">
      <span className="hidden sm:inline">
        Join us for localhost, our first conference, in San Francisco on June 18
      </span>
      <span className="sm:hidden">localhost conf · SF · June 18</span>
      <a href="#" className="underline underline-offset-2 transition-opacity hover:opacity-80">
        Get your ticket
      </a>
    </div>
  );
}
