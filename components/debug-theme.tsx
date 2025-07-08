export function DebugTheme() {
  return (
    <div className="p-4 border border-red-500">
      <h3 className="text-lg font-bold">Theme Debug</h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="p-2 bg-background text-foreground">bg-background / text-foreground</div>
        <div className="p-2 bg-primary text-primary-foreground">bg-primary / text-primary-foreground</div>
        <div className="p-2 bg-secondary text-secondary-foreground">bg-secondary / text-secondary-foreground</div>
        <div className="p-2 bg-black text-white">bg-black / text-white</div>
        <div className="p-2 bg-white text-black">bg-white / text-black</div>
      </div>
    </div>
  );
}