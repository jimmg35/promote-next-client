import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E5D9C0] bg-white/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-[#4F3224] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#782F40]">
            Department of Geography
          </p>
          <p className="mt-2 text-[#6C4C3A]">
            © Florida State University - Bellamy Bldg, 323, Tallahassee, FL
            32306, USA
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#cta" className="hover:text-[#782F40]">
            Scholarships
          </Link>
          <Link href="#events" className="hover:text-[#782F40]">
            Upcoming Events
          </Link>
          <Link href="mailto:contact@fsu.edu" className="hover:text-[#782F40]">
            contact@fsu.edu
          </Link>
        </div>
      </div>
    </footer>
  );
}
