'use client';

import { useRouter } from 'next/navigation';

export default function DeliveryTrackingPage() {
  const router = useRouter();

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Sidebar Navigation */}
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-40 overflow-y-auto flex flex-col">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                    <i className="ph-bold ph-drop text-lg"></i>
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900">Pressly</span>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
            <button onClick={() => router.push('/agent-dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-chart-pie-slice text-lg"></i>
                <span>Tableau de bord</span>
            </button>
            
            <button onClick={() => router.push('/agent-orders')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-list-checks text-lg"></i>
                <span>Commandes</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-truck text-lg"></i>
                <span>Livraisons</span>
            </button>
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem('userRole');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userName');
                sessionStorage.setItem('currentScreen', 'login');
              }
              router.push('/login');
            }} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6">
        
        {/* Header with Back Button */}
        <div className="mb-8 flex items-center gap-4">
            <button onClick={() => router.push('/agent-deliveries')} className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-all">
                <i className="ph ph-arrow-left text-lg"></i>
                <span>Retour</span>
            </button>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Suivi de la livraison</h1>
                <p className="text-gray-500 mt-1">LIV-2024-047 - ORD-2024-160</p>
            </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Column */}
            <div className="lg:col-span-2">
                {/* Simulated Map */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-0 overflow-hidden h-[600px] relative mb-6">
                    {/* Map Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-brand-50 opacity-20"></div>
                    
                    {/* Street Grid Simulation */}
                    <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 400 600">
                            <g stroke="#5a7880" strokeWidth="1.5" fill="none">
                                {/* Horizontal Streets */}
                                <line x1="0" y1="80" x2="400" y2="80"></line>
                                <line x1="0" y1="160" x2="400" y2="160"></line>
                                <line x1="0" y1="240" x2="400" y2="240"></line>
                                <line x1="0" y1="320" x2="400" y2="320"></line>
                                <line x1="0" y1="400" x2="400" y2="400"></line>
                                <line x1="0" y1="480" x2="400" y2="480"></line>
                                
                                {/* Vertical Streets */}
                                <line x1="80" y1="0" x2="80" y2="600"></line>
                                <line x1="160" y1="0" x2="160" y2="600"></line>
                                <line x1="240" y1="0" x2="240" y2="600"></line>
                                <line x1="320" y1="0" x2="320" y2="600"></line>
                            </g>
                        </svg>
                    </div>

                    {/* Pickup Location */}
                    <div className="absolute top-20 left-20 z-10">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-500 ring-4 ring-green-100"></div>
                            <div className="bg-white px-3 py-1 rounded-lg shadow-md text-xs font-semibold text-green-700">
                                Départ
                            </div>
                        </div>
                    </div>

                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600">
                        <polyline points="100,100 150,120 200,140 250,160 280,220 300,280 320,350 340,450" 
                                  stroke="#5a7880" strokeWidth="3" fill="none" strokeDasharray="5,5"
                                  style={{ animation: 'dash 20s linear infinite' }}
                        />
                    </svg>

                    {/* Delivery Vehicle Current Position */}
                    <div className="absolute top-[60%] left-[70%] z-20" style={{ animation: 'bounce 3s ease-in-out infinite' }}>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 ring-4 ring-blue-100 flex items-center justify-center text-white shadow-lg">
                                <i className="ph ph-truck-bed text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold text-gray-900 bg-white px-2 py-1 rounded-lg mt-2 shadow-md whitespace-nowrap">
                                Marc Leblanc
                            </div>
                        </div>
                    </div>

                    {/* Delivery Destination */}
                    <div className="absolute bottom-20 right-20 z-10">
                        <div className="flex items-center gap-2 flex-row-reverse">
                            <div className="w-6 h-6 rounded-full bg-red-500 ring-4 ring-red-100"></div>
                            <div className="bg-white px-3 py-1 rounded-lg shadow-md text-xs font-semibold text-red-700">
                                Destination
                            </div>
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-6 left-6 space-y-2 z-30">
                        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all">
                            <i className="ph ph-plus text-lg text-gray-700"></i>
                        </button>
                        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all">
                            <i className="ph ph-minus text-lg text-gray-700"></i>
                        </button>
                    </div>

                    {/* Fullscreen Button */}
                    <button className="absolute top-4 right-4 z-30 bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-all">
                        <i className="ph ph-arrows-out text-lg text-gray-700"></i>
                    </button>
                </div>

                {/* Journey Details */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Parcours</h2>
                    <div className="space-y-3">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <div className="w-0.5 h-12 bg-green-200 my-1"></div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Départ</p>
                                <p className="text-sm text-gray-500">92 Avenue des Champs-Élysées, 75008 Paris</p>
                                <p className="text-xs text-gray-400 mt-1">13:45 - Commande récupérée</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
                                <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">En cours</p>
                                <p className="text-sm text-gray-500">12 Rue des Fleurs, 75001 Paris</p>
                                <p className="text-xs text-blue-600 font-semibold mt-1">ETA: 14:45 (10 min)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Destination finale</p>
                                <p className="text-sm text-gray-500">45 Avenue des Champs-Élysées, 75008 Paris</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
                {/* Delivery Status Card */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Statut de la livraison</h2>
                    
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">LIV-2024-047</span>
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">EN ROUTE</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Distance restante:</span>
                            <span className="font-semibold">2.3 km</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                            <span>Temps estimé:</span>
                            <span className="font-semibold">10 min</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-gray-100 rounded-full h-3 mb-3">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">65% du parcours complété</p>
                </div>

                {/* Driver Information */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Livreur</h2>
                    
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold text-lg">
                            ML
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Marc Leblanc</p>
                            <p className="text-sm text-gray-500">DRV-001</p>
                        </div>
                    </div>

                    <div className="space-y-3 mb-4 pb-4 border-b border-gray-100 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Statut:</span>
                            <span className="font-semibold text-blue-600 flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>En livraison
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Livraisons du jour:</span>
                            <span className="font-semibold text-gray-900">5</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Note:</span>
                            <span className="font-semibold text-gray-900 flex items-center gap-1">
                                <i className="ph-fill ph-star text-amber-400 text-sm"></i> 4.7/5
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                            <i className="ph ph-phone"></i>Appeler
                        </button>
                        <button className="flex-1 py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-sm transition-all flex items-center justify-center gap-2">
                            <i className="ph ph-chat-dots"></i>SMS
                        </button>
                    </div>
                </div>

                {/* Customer Information */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Client</h2>
                    
                    <p className="font-bold text-gray-900 mb-1">Marie Rousseau</p>
                    <p className="text-sm text-gray-500 mb-4">Client depuis 1 an</p>

                    <div className="space-y-2 text-sm mb-4 pb-4 border-b border-gray-100">
                        <p className="text-gray-600"><i className="ph ph-phone inline mr-2 text-brand"></i>06 12 34 56 78</p>
                        <p className="text-gray-600"><i className="ph ph-envelope inline mr-2 text-brand"></i>marie@example.com</p>
                        <p className="text-gray-600"><i className="ph ph-map-pin inline mr-2 text-brand"></i>12 Rue des Fleurs, 75001 Paris</p>
                    </div>

                    <button className="w-full py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Appeler le client
                    </button>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Commande</h2>
                    
                    <div className="space-y-3 text-sm mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Costume 2 pièces</span>
                            <span className="font-semibold">8,500 FCFA</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Chemise blanche</span>
                            <span className="font-semibold">3,500 FCFA</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Gilet de laine</span>
                            <span className="font-semibold">3,500 FCFA</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span className="text-brand">15,500 FCFA</span>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <p className="text-xs font-semibold text-emerald-700 flex items-center gap-2">
                            <i className="ph ph-check-circle"></i>Paiement confirmé
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
