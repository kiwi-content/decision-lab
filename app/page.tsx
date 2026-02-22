import Link from "next/link";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for real-life choices.",
};

export default function Home() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-7 sm:px-10 sm:py-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="sticker-dot">Decision Lab</p>
          <nav className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span className="rounded-full border border-black/15 bg-white px-4 py-2">Home</span>
            <span className="rounded-full border border-black/15 bg-white px-4 py-2">Simulators</span>
            <span className="rounded-full border border-black/15 bg-white px-4 py-2">About</span>
          </nav>
        </header>

        <div className="relative mb-10 fade-in-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-black/55">
            Run your decision before you live it
          </p>
          <h1 className="display-font text-5xl font-extrabold uppercase leading-[0.95] text-[#181423] sm:text-7xl lg:text-8xl">
            Unshaken
            <br />
            by hard choices
          </h1>
          <div className="scribble-ring absolute left-6 top-[6.7rem] h-10 w-52 sm:top-[8.9rem] sm:w-72" />
          <p className="mt-7 max-w-2xl rounded-2xl border border-black/15 bg-[#f3bae2] px-5 py-4 text-sm font-medium text-[#4b405a] sm:text-base">
            상황을 입력하면 감정, 리스크, 시간축을 같이 고려해서 결정을 시뮬레이션합니다.
            관계, 커리어, 이사, 정리 같은 애매한 선택을 덜 흔들리게 만듭니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/text-my-ex" className="card-pop fade-in-up bg-[#ffffff] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-black/55">Relationship</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#1a1627]">Should I Text My Ex?</h2>
            <p className="mt-3 text-sm text-[#5b536e]">감정적 리스크와 타이밍을 같이 평가합니다.</p>
          </Link>

          <Link href="/quit-my-job" className="card-pop fade-in-up bg-[#63d890] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-black/60">Career</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#16231b]">Should I Quit My Job?</h2>
            <p className="mt-3 text-sm text-[#1d3a2a]">안정성, 성장성, 소진도를 균형 있게 비교합니다.</p>
          </Link>

          <Link href="/break-up" className="card-pop fade-in-up bg-[#ffe28a] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-black/60">Relationship</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#2b2411]">Should I Break Up?</h2>
            <p className="mt-3 text-sm text-[#5a4d26]">관계의 반복 패턴과 장기적 합을 점검합니다.</p>
          </Link>

          <Link href="/move" className="card-pop fade-in-up bg-[#66c6ff] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-black/65">Relocation</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#112738]">Should I Move?</h2>
            <p className="mt-3 text-sm text-[#21445e]">기회와 비용, 생활 만족도를 함께 계산합니다.</p>
          </Link>
        </div>

        <div className="mt-5">
          <Link href="/throw-away" className="card-pop fade-in-up block bg-white p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-black/55">Declutter</p>
            <h2 className="display-font text-3xl font-bold text-[#1a1627]">Should I Throw This Away?</h2>
            <p className="mt-3 text-sm text-[#5b536e]">감정 애착과 실사용 가치를 분리해서 정리 결정을 돕습니다.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
