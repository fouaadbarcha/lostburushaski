import Link from "next/link";

const DIALECTS = ["Hunza", "Nagar", "Yasin"];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="flex justify-center gap-2 mb-6">
        {DIALECTS.map((d) => (
          <span key={d} className="pill-neutral">
            {d}
          </span>
        ))}
      </div>

      <h1 className="font-serif text-5xl font-semibold tracking-tight text-ink mb-5">
        Preserve <span className="italic text-accent">Burushaski</span> as it&apos;s
        actually spoken
      </h1>

      <p className="text-[17px] leading-relaxed text-ink-muted max-w-2xl mx-auto mb-10">
        A community-driven archive of Burushaski vocabulary, pronunciation, and
        regional variation across Hunza, Nagar, and Yasin. Contributors submit
        words; moderators review them; only approved entries become part of
        the public dictionary.
      </p>

      <div className="flex justify-center gap-3 mb-16">
        <Link href="/dictionary" className="btn-primary">
          Browse the dictionary
        </Link>
        <Link href="/register" className="btn-secondary">
          Become a contributor
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-left">
        <div className="card">
          <div className="font-serif text-lg font-semibold mb-1.5">Regional, not standardized</div>
          <p className="text-sm text-ink-muted leading-relaxed">
            Different valleys use different words for the same idea. We keep
            regional forms distinct instead of flattening them into one
            &ldquo;correct&rdquo; version.
          </p>
        </div>
        <div className="card">
          <div className="font-serif text-lg font-semibold mb-1.5">Reviewed, not anonymous</div>
          <p className="text-sm text-ink-muted leading-relaxed">
            Every submission is attributed to its contributor and reviewed by
            a moderator before it appears publicly.
          </p>
        </div>
        <div className="card">
          <div className="font-serif text-lg font-semibold mb-1.5">Built with speakers</div>
          <p className="text-sm text-ink-muted leading-relaxed">
            The archive only grows from real contributions — nothing here is
            generated or assumed.
          </p>
        </div>
      </div>
    </div>
  );
}
