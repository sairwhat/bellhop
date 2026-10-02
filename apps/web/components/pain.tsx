const PAINS = [
  {
    title: "It is a photo on your camera roll",
    body: "You took a picture of the grid once and now you squint at it every morning.",
  },
  {
    title: "The portal changes rooms at 11pm",
    body: "Nothing tells you until you are standing outside the wrong lecture hall.",
  },
  {
    title: "Four apps, none of them editable",
    body: "Calendar for the timetable, a timer, a notes app, and a group chat that never settles on a room.",
  },
];

export function Pain() {
  return (
    <section id="problem" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-24">
        <h2 className="max-w-2xl text-[1.9rem] leading-[1.12] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
          Your whole week already exists. In a photo you cannot edit.
        </h2>

        <ul className="mt-16 divide-y divide-line border-t border-line">
          {PAINS.map((pain, i) => (
            <li
              key={pain.title}
              className="grid gap-2 py-7 sm:grid-cols-[3rem_minmax(0,20rem)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-[10px] text-lavender">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[16px] font-medium tracking-[-0.01em] text-ink">
                {pain.title}
              </h3>
              <p className="max-w-md text-[14px] leading-relaxed text-muted">{pain.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}