export const notes = [
  {
    slug: 'taxbot',
    title: 'Taxbot',
    tags: ['LangChain', 'RAG', 'ChromaDB', 'Gemini API'],
    link: 'https://github.com/Nags-gk/Taxbot',
    useCase:
      'Answers tax questions in plain language by retrieving from real tax-code documents instead of relying on the model’s memory, so answers stay grounded and current.',
    architecture:
      'Next.js frontend → FastAPI backend → LangChain orchestration → documents chunked and embedded into ChromaDB → top-k passages retrieved and injected into a Gemini prompt (RAG) → grounded answer streamed back.',
    highlight:
      '90% accuracy on a held-out question set while cutting response time 60% — a retrieval pipeline that keeps the LLM honest instead of letting it hallucinate tax law.',
  },
  {
    slug: 'snooptrade',
    title: 'Snooptrade',
    tags: ['Python', 'FastAPI', 'AWS', 'React'],
    link: 'https://github.com/Nags-gk/SnoopTrade',
    useCase:
      'Surfaces potential insider-trading patterns by cross-referencing SEC EDGAR insider filings against real stock price movement.',
    architecture:
      'A scheduled ingestion job pulls SEC Form 4 filings and joins them to price data by ticker and date; FastAPI serves the joined dataset; a React dashboard renders it as a live, filterable table; deployed on AWS for hands-off scheduled updates.',
    highlight:
      'Two independent, messy public data sources reconciled into one coherent signal — the hard part was the data-engineering plumbing, not the dashboard.',
  },
  {
    slug: 'quantum-ml-research',
    title: 'Quantum ML Research',
    tags: ['Qiskit', 'PennyLane', 'Cirq', 'PyTorch'],
    link: 'https://zenodo.org/records/17570822',
    useCase:
      'A benchmarked research investigation into whether a quantum circuit can meaningfully outperform a classical CNN at image classification.',
    architecture:
      'Quanvolutional Neural Network layers built in Cirq/Qiskit/PennyLane substitute a parameterized quantum circuit for a classical convolution filter; outputs feed a classical PyTorch classifier head; benchmarked across circuit depths against classical baselines.',
    highlight:
      'A measured +5% accuracy gain over the classical baseline — one of the few projects here backed by a published, peer-reviewable result.',
  },
  {
    slug: 'canvas-go',
    title: 'Canvas-Go',
    tags: ['FastAPI', 'MySQL', 'React', 'JWT'],
    link: 'https://github.com/Nags-gk/Canvas-Go',
    useCase:
      'A secure Learning Management System — course content, enrollment, grading — built to hold up under real multi-user load, not just a CRUD demo.',
    architecture:
      'FastAPI backend with JWT auth and role-based access control; a normalized MySQL schema with indexes tuned for the enrollment/grading tables; React frontend on a versioned REST API.',
    highlight:
      '-35% query latency after profiling and re-indexing — the kind of optimization that only shows up once you stop trusting the ORM’s defaults.',
  },
  {
    slug: 'bitsmart',
    title: 'Bitsmart',
    tags: ['TensorFlow', 'LSTM', 'Flask'],
    link: 'https://github.com/Nags-gk/Bitsmart',
    useCase:
      'Forecasts Bitcoin price direction over the coming week — a real time-series forecasting problem, not a classification toy.',
    architecture:
      'A multivariate LSTM in TensorFlow trained on a sliding 30-day window of price and volume features, producing a 7-day-ahead forecast; served on demand through a Flask API.',
    highlight:
      'Multivariate, not univariate — the model learns from how price and volume move together, the detail that separates a real forecaster from a naive one.',
  },
];

export function getNote(slug) {
  return notes.find((n) => n.slug === slug);
}

export function getAdjacentNotes(slug) {
  const index = notes.findIndex((n) => n.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? notes[index - 1] : null,
    next: index < notes.length - 1 ? notes[index + 1] : null,
  };
}
