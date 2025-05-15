import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Engajamento() {
  // Dados mockados de escolas
  const escolas = [
    { nome: "Escola A", lat: -23.5505, lng: -46.6333, problema: "Falta de água" },
    { nome: "Escola B", lat: -12.9714, lng: -38.5014, problema: "Sem merenda" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Participe da Mudança</h1>
      
      {/* Mapa */}
      <div className="h-96 mb-8">
        <MapContainer center={[-15.7, -47.8]} zoom={4} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {escolas.map((escola, index) => (
            <Marker key={index} position={[escola.lat, escola.lng]}>
              <Popup>
                <strong>{escola.nome}</strong><br />
                Problema: {escola.problema}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Formulário */}
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Reporte um problema</h2>
        <input type="text" placeholder="Seu nome" className="w-full p-2 mb-3 border rounded" />
        <input type="email" placeholder="E-mail" className="w-full p-2 mb-3 border rounded" />
        <textarea placeholder="Descreva o problema" className="w-full p-2 mb-3 border rounded"></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Enviar
        </button>
      </form>
    </div>
  );
}