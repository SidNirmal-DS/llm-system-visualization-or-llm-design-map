// app/design-graphs/page.tsx
import Diagram from './diagram';

export default function DesignGraphsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Design System Patterns</h1>
      <Diagram />
    </main>
  );
}