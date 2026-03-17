'use client';

interface MetaLabelProps {
  interactionCount: number;
}

export default function MetaLabel({ interactionCount }: MetaLabelProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[60] pointer-events-none select-none">
      <p className="font-mono text-[9px] text-white/30 tracking-[2px] uppercase">
        {interactionCount > 0 && (
          <span className="text-white/20">{interactionCount} {interactionCount === 1 ? 'QUERY' : 'QUERIES'} · </span>
        )}
        0 API CALLS · DETERMINISTIC · $0.00
      </p>
    </div>
  );
}
