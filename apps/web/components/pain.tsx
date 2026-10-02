const PAINS = [
  {
    title: "It is a photo on your camera roll",
    body: "You photographed the grid once and now you squint at it every morning.",
  },
  {
    title: "Your portal knows more than you do",
    body: "Registrars update rooms at 11pm. Nothing tells you until you walk there.",
  },
  {
    title: "Four apps, none of them right",
    body: "Calendar for the timetable, a timer app, a notes app, and a group chat that never settles on a room.",
  },
];

export function Pain() {
  return (
    <section id="how" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-[10px] tracking-[0.16em] text-faint">THE PROBLEM</p>
        <h2 className="mt-4 max-w-lg text-[1.9rem] leading-[1.15] font-medium tracking-[-0.02em] text-balance sm:text-[2.2rem]">
          You already have the information. You just cannot edit it.
        </h2>

        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {PAINS.map((pain) => (
            <li key={pain.title}>
              <span className="font-mono text-[10px] text-lavender">—</span>
              <h3 className="mt-2 text-[15px] font-medium text-ink">{pain.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{pain.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}