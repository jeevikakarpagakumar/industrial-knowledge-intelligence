import { corpus } from "@stratum/data";
import { Server, Database, Layers, CheckCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />

      {/* Main card */}
      <div className="relative w-full max-w-2xl bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white leading-none">Stratum</h1>
            <p className="text-xs text-slate-400 mt-1">Industrial Knowledge Intelligence</p>
          </div>
        </div>

        <div className="h-px bg-slate-800/60 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-indigo-400">
              <Server className="h-4 w-4" />
              <span className="font-semibold text-xs uppercase tracking-wider">Hono API Server</span>
            </div>
            <a 
              href="http://localhost:3000/api/health" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-mono text-indigo-300 hover:text-indigo-200 transition-colors underline decoration-dotted"
            >
              GET /api/health
            </a>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-indigo-400">
              <Database className="h-4 w-4" />
              <span className="font-semibold text-xs uppercase tracking-wider">Shared Package</span>
            </div>
            <span className="text-sm font-mono text-slate-300">@stratum/data (v{corpus.version})</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Shared Corpus (Topics)</h2>
          <div className="flex flex-col gap-3">
            {corpus.topics.map((topic) => (
              <div 
                key={topic.id} 
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/40 hover:border-slate-700/60 transition-colors flex flex-col gap-1.5"
              >
                <h3 className="font-semibold text-indigo-300 text-sm">{topic.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-4 border-t border-slate-800/60">
          <span>Status: Development Scaffold Ready</span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle className="h-3.5 w-3.5" />
            <span>All systems nominal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
