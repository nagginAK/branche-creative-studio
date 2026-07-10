export default function SideRail() {
  return (
    <>
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-12 z-40 flex-col items-center justify-between py-8 border-r border-[#F2EDE4]/8 pointer-events-none">
        <span className="text-[#F2EDE4]/40 text-[11px] tracking-[0.3em]" style={{ writingMode: "vertical-rl" }}>
          © {new Date().getFullYear()}
        </span>
        <div className="flex flex-col gap-0 w-[3px]">
          <span className="h-10 bg-[#E6C570]" />
          <span className="h-10 bg-[#CDA850]" />
          <span className="h-10 bg-[#977A33]" />
          <span className="h-10 bg-[#5C4A20]" />
        </div>
        <span className="text-[#F2EDE4]/40 text-[11px] tracking-[0.3em]" style={{ writingMode: "vertical-rl" }}>
          SOUTH FLORIDA
        </span>
      </div>
      <div className="hidden lg:flex fixed right-0 top-0 bottom-0 w-12 z-40 flex-col items-center justify-end py-8 border-l border-[#F2EDE4]/8 pointer-events-none">
        <span className="text-[#F2EDE4]/40 text-[11px] tracking-[0.3em]" style={{ writingMode: "vertical-rl" }}>
          BRANCHE CREATIVE
        </span>
      </div>
    </>
  );
}
