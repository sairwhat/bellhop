import { NotesPreview } from "@/components/notes-preview";
import { PomodoroPreview } from "@/components/pomodoro-preview";
import { TasksPreview } from "@/components/tasks-preview";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1400px] px-5 py-24">
      <h2 className="max-w-2xl text-[1.9rem] leading-[1.12] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
        One timetable, and the things that hang off it.
      </h2>

      {/* Layout 1: split, text left / interactive panel right */}
      <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
        <div>
          <h3 className="text-[18px] font-medium tracking-[-0.01em]">
            A timetable you can actually change
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
            Move a class to Thursday and every instance moves with it. Rename a course
            once instead of editing six separate meetings. Conflicts flag themselves
            before your registrar does.
          </p>
        </div>

        <div className="rounded-[var(--radius-panel)] bg-surface p-5 ring-1 ring-line">
          <p className="font-mono text-[9px] tracking-[0.16em] text-faint">
            TUESDAY · DRAG TO MOVE
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3 rounded-[var(--radius-inner)] border-l-2 border-l-lavender bg-lavender-wash px-3.5 py-3">
              <span className="font-mono text-[11px] text-lavender-soft">09:00</span>
              <span className="text-[13px] text-ink">Organic Chemistry</span>
              <span className="ml-auto font-mono text-[10px] text-faint">Sci-112</span>
            </div>
            <div className="flex items-center gap-3 rounded-[var(--radius-inner)] border border-dashed border-line px-3.5 py-3">
              <span className="font-mono text-[11px] text-faint">10:45</span>
              <span className="text-[13px] text-muted">Calculus II</span>
              <span className="ml-auto font-mono text-[10px] text-faint">B-204</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layout 2: stacked heading over a two-up tile row */}
      <div className="mt-24">
        <h3 className="text-[18px] font-medium tracking-[-0.01em]">
          Study tools that already know your week
        </h3>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          A focus block knows which class you are meant to be in. Unfinished tasks roll
          into tomorrow instead of piling up in a list you never open again.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PomodoroPreview />
          <TasksPreview />
        </div>
      </div>

      {/* Layout 3: full-width tinted panel, text above a wide preview */}
      <div className="mt-24 rounded-[var(--radius-panel)] bg-raised p-6 ring-1 ring-line sm:p-10">
        <h3 className="text-[18px] font-medium tracking-[-0.01em]">
          Ask your notes, not the internet
        </h3>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          The AI answers from lecture notes you already took, and tells you which ones it
          used. No generic summaries of a topic you have not studied yet.
        </p>
        <div className="mt-8 max-w-xl">
          <NotesPreview />
        </div>
      </div>
    </section>
  );
}