import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {/* Cabeçalho */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Evasão Escolar no Brasil</h1>
        <p className="text-lg text-gray-600">Dados que revelam a crise na educação básica</p>
      </header>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard value="23%" label="No Norte" />
        <StatCard value="18%" label="No Nordeste" />
        <StatCard value="1 em 4" label="Crianças abandonam a escola" />
      </div>

      {/* Mapa Simples (SVG do Brasil) */}
      <div className="mb-12">
        <img src="/brasil-evasao.svg" alt="Mapa do Brasil com índices de evasão" className="mx-auto" />
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4">
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Ver dados detalhados
        </Link>
        <Link href="/engajamento" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Participe
        </Link>
      </div>
    </div>
  );
}

// Componente de Card de Estatística
function StatCard({ value, label }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}