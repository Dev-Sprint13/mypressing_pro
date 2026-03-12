'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useOrdersStore } from '@/lib/orders-store';
import { buildStorageCode, formatStorageLocation } from '@/lib/utils';

export default function AgentStoragePage() {
  const router = useRouter();
  const orders = useOrdersStore((state) => state.orders);

  const zones = Array.from(
    new Set(
      orders
        .map((order) => order.storageZone)
        .filter((zone): zone is string => Boolean(zone)),
    ),
  );

  const [selectedZone, setSelectedZone] = useState<string>(zones[0] ?? 'Salle principale');
  const [selectedRack, setSelectedRack] = useState<string>('A');

  const slotPositions = Array.from({ length: 20 }, (_, index) =>
    (index + 1).toString().padStart(2, '0'),
  );

  const filteredOrders = orders.filter((order) => {
    const matchesZone = selectedZone ? order.storageZone === selectedZone : true;
    const matchesRack = selectedRack ? order.storageRack === selectedRack : true;
    return matchesZone && matchesRack;
  });

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
        {/* Sidebar Navigation */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-40 overflow-y-auto flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                <i className="ph-bold ph-drop text-lg" />
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">PressingPro</span>
            </div>
            <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-brand-50 text-brand rounded-full">
              AGENT
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-1">
            <button
              onClick={() => router.push('/agent-dashboard')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-chart-pie-slice text-lg" />
              <span>Tableau de bord</span>
            </button>

            <button
              onClick={() => router.push('/agent-new-order')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-plus-circle text-lg" />
              <span>Nouvelle commande</span>
            </button>

            <button
              onClick={() => router.push('/agent-orders')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-list-checks text-lg" />
              <span>Commandes</span>
            </button>

            <button
              onClick={() => router.push('/agent-clients')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-users text-lg" />
              <span>Clients</span>
            </button>

            <button
              onClick={() => router.push('/agent-storage')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-archive-box text-lg" />
              <span>Rangement</span>
            </button>

            <button
              onClick={() => router.push('/agent-cash')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-cash text-lg" />
              <span>Caisse</span>
            </button>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={() => router.push('/login')}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm"
            >
              <i className="ph ph-sign-out text-lg" />
              <span>Déconnexion</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 pt-6 pb-12 px-6 opacity-0 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Organisation du rangement
              </h1>
              <p className="text-gray-500 mt-1">
                Visualisez rapidement les emplacements occupés et libres dans la zone de rangement.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Zone</label>
                <select
                  value={selectedZone}
                  onChange={(event) => setSelectedZone(event.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5"
                >
                  {zones.length === 0 && <option value="Salle principale">Salle principale</option>}
                  {zones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Rack de vêtements
                </label>
                <div className="flex gap-2">
                  {['A', 'B', 'C', 'D'].map((rack) => (
                    <button
                      key={rack}
                      type="button"
                      onClick={() => setSelectedRack(rack)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold border ${
                        selectedRack === rack
                          ? 'bg-brand text-white border-brand'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      } transition-all`}
                    >
                      Rack {rack}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Résumé de la sélection
                </label>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600">
                  <p>
                    Zone : <span className="font-semibold">{selectedZone}</span>
                  </p>
                  <p>
                    Rack : <span className="font-semibold">{selectedRack}</span>
                  </p>
                  <p>
                    Commandes sur ce rack :{' '}
                    <span className="font-semibold">{filteredOrders.length}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rack grid */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Rack {selectedRack} — {selectedZone}
              </h2>
              <span className="text-xs text-gray-500">
                Chaque case représente un crochet ou une position physique.
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {slotPositions.map((position) => {
                const slotOrders = filteredOrders.filter(
                  (order) => order.storagePosition === position,
                );

                const occupied = slotOrders.length > 0;
                const code = buildStorageCode({
                  storageZone: selectedZone,
                  storageRack: selectedRack,
                  storagePosition: position,
                })!;

                return (
                  <button
                    key={position}
                    type="button"
                    className={`relative p-3 rounded-xl border text-left text-xs transition-all ${
                      occupied
                        ? 'border-brand bg-brand-50 hover:bg-brand hover:text-white'
                        : 'border-dashed border-gray-200 bg-gray-50 hover:border-brand/60 hover:bg-brand-50/40'
                    }`}
                    onClick={() => {
                      if (slotOrders[0]) {
                        router.push('/agent-order-details');
                      }
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">
                        {code}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          occupied ? 'bg-emerald-500' : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    {occupied ? (
                      <div className="space-y-0.5">
                        <p className="truncate">
                          {slotOrders[0].customerName}
                        </p>
                        <p className="text-[11px] opacity-80 truncate">
                          {slotOrders[0].service}
                        </p>
                      </div>
                    ) : (
                      <p className="text-[11px] text-gray-500">Libre</p>
                    )}
                    {occupied && slotOrders.length > 1 && (
                      <p className="mt-1 text-[10px] text-amber-600 font-semibold">
                        +{slotOrders.length - 1} commande(s)
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span>Emplacement occupé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded border border-dashed border-gray-300 bg-gray-50" />
                <span>Emplacement libre</span>
              </div>
            </div>
          </div>

          {/* List of orders for this rack */}
          <div className="mt-6 bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              Commandes sur le rack {selectedRack}
            </h2>
            {filteredOrders.length === 0 ? (
              <p className="text-xs text-gray-500">Aucune commande sur ce rack pour l’instant.</p>
            ) : (
              <ul className="divide-y divide-gray-100 text-sm">
                {filteredOrders.map((order) => (
                  <li key={order.id} className="py-2 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {order.id} · {order.customerName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {order.service} • {order.customerPhone}
                      </p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p className="font-semibold text-gray-900">
                        {buildStorageCode(order) ?? ''}
                      </p>
                      <p>{formatStorageLocation(order)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

