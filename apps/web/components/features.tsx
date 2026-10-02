import { NotesPreview } from "@/components/notes-preview";
import { PomodoroPreview } from "@/components/pomodoro-preview";
import { TasksPreview } from "@/components/tasks-preview";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono text-[10px] tracking-[0.16em] text-faint">WHAT IS INSIDE</p>
      <h2 className="mt-4 max-w-lg text-[1.9rem] leading-[1.15] font-medium tracking-[-0.02em] text-balance sm:text-[2.2rem]">
        One timetable, and the things that hang off it.
      </h2>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <article>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] text-lavender">01</span>
            <h3 className="text-[17px] font-medium">A timetable you can actually change</h3>
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted">
            Move a class to Thursday and every instance moves with it. Rename a course
            once instead of editing six separate meetings. Conflicts flag themselves
            before your registrar does.
          </p>
          <div className="mt-5 rounded-[var(--radius-card)] border border-line bg-surface p-5">
            <p className="font-mono text-[9px] tracking-[0.14em] text-faint">
              TUESDAY · DRAG TO MOVE
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 rounded-[10px] border-l-2 border-l-lavender bg-lavender-wash px-3 py-2">
                <span className="font-mono text-[11px] text-lavender-deep">09:00</span>
                <span className="text-[12.5px] text-ink">Organic Chemistry</span>
                <span className="ml-auto font-mono text-[10px] text-faint">Sci-112</span>
              </div>
              <div className="flex items-center gap-2 rounded-[10px] border border-dashed border-line px-3 py-2">
                <span className="font-mono text-[11px] text-faint">10:45</span>
                <span className="text-[12.5px] text-muted">Calculus II</span>
                <span className="ml-auto font-mono text-[10px] text-faint">B-204</span>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] text-lavender">02</span>
            <h3 className="text-[17px] font-medium">The study tools, already attached</h3>
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted">
            A pomodoro block knows which class you are supposed to be in. Tasks roll
            into tomorrow instead of piling up in a list you never open again.
          </p>
          <div className="mt-5 grid gap-3">
            <PomodoroPreview />
            <TasksPreview />
          </div>
        </article>

        <article className="sm:col-span-2">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] text-lavender">03</span>
            <h3 className="text-[17px] font-medium">Ask your notes, not the internet</h3>
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted">
            The AI answers from the lecture notes you already took, and tells you which
            ones it used. No generic summaries of a topic you did not study yet.
          </p>
          <div className="mt-5 max-w-md">
            <NotesPreview />
          </div>
        </article>
      </div>
    </section>
  );
}