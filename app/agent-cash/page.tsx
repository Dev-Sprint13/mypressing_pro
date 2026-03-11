'use client';

import { useRouter } from 'next/navigation';

export default function AgentCashPage() {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      router.push('/login');
    }
  };

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
                <span className="font-bold text-lg tracking-tight text-gray-900">PressingPro</span>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
            <button onClick={() => router.push('/agent-dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-chart-pie-slice text-lg"></i>
                <span>Tableau de bord</span>
            </button>
            
            <button onClick={() => router.push('/agent-new-order')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-plus-circle text-lg"></i>
                <span>Nouvelle commande</span>
            </button>
            
            <button onClick={() => router.push('/agent-orders')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-list-checks text-lg"></i>
                <span>Commandes</span>
            </button>
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>

            <button onClick={() => router.push('/agent-deliveries')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-truck text-lg"></i>
                <span>Livraisons</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6">
        
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Caisse</h1>
            <p className="text-gray-500 mt-1">Résumé des paiements et mouvements de caisse</p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Today's Revenue */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Revenus du jour</p>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <i className="ph ph-wallet text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">142,340</h2>
                <p className="text-brand font-semibold text-sm">FCFA</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500"><i className="ph ph-trend-up text-emerald-600 mr-1"></i> +12% vs hier</p>
                </div>
            </div>

            {/* Total Transactions */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Nombre de transactions</p>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="ph ph-list text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">18</h2>
                <p className="text-gray-500 text-sm">transactions</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Ticket moyen: 7,908 FCFA</p>
                </div>
            </div>

            {/* Pending Payments */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Paiements en attente</p>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <i className="ph ph-hourglass-high text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">28,500</h2>
                <p className="text-gray-500 text-sm">sur compte</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">2 factures en attente</p>
                </div>
            </div>
        </div>

        {/* Payment Methods Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Payment Method Distribution */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Répartition par mode de paiement</h2>
                
                <div className="space-y-5">
                    {/* Espèces */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <i className="ph ph-money text-amber-600"></i> Espèces
                            </span>
                            <span className="font-bold text-gray-900">89,600 FCFA</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '63%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">63% • 11 transactions</p>
                    </div>

                    {/* Carte */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <i className="ph ph-credit-card text-blue-600"></i> Carte bancaire
                            </span>
                            <span className="font-bold text-gray-900">45,200 FCFA</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">32% • 5 transactions</p>
                    </div>

                    {/* Crédit */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <i className="ph ph-file-text text-gray-600"></i> Sur compte
                            </span>
                            <span className="font-bold text-gray-900">28,500 FCFA</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">20% • 2 transactions</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Actions rapides</h2>
                
                <div className="space-y-3">
                    <button onClick={() => router.push('/agent-new-order')} className="w-full py-3 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <i className="ph ph-plus-circle"></i>
                        Nouvelle commande
                    </button>
                    
                    <button className="w-full py-3 px-4 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <i className="ph ph-receipt"></i>
                        Générer un reçu
                    </button>
                    
                    <button className="w-full py-3 px-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <i className="ph ph-file-pdf"></i>
                        Télécharger rapport
                    </button>
                    
                    <button className="w-full py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <i className="ph ph-list"></i>
                        Clôturer la caisse
                    </button>
                </div>

                {/* Note */}
                <div className="mt-6 p-4 bg-brand-50 border border-brand-100 rounded-lg">
                    <p className="text-xs font-semibold text-brand mb-2">Note</p>
                    <p className="text-xs text-gray-700">Les montants affichés sont mis à jour en temps réel et incluent les paiements de la journée.</p>
                </div>
            </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Dernières transactions</h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
                {/* Transaction 1 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <i className="ph ph-check-circle text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Marie Rousseau</p>
                            <p className="text-xs text-gray-500">ORD-2024-160 • Espèces</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+15,340 FCFA</p>
                </div>

                {/* Transaction 2 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="ph ph-credit-card text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Jean Dupont</p>
                            <p className="text-xs text-gray-500">ORD-2024-159 • Carte bancaire</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+22,000 FCFA</p>
                </div>

                {/* Transaction 3 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                            <i className="ph ph-money text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Sophie Martin</p>
                            <p className="text-xs text-gray-500">ORD-2024-158 • Espèces</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+8,500 FCFA</p>
                </div>

                {/* Transaction 4 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                            <i className="ph ph-file-text text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Hôtel de Paris</p>
                            <p className="text-xs text-gray-500">ORD-2024-157 • Sur compte</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+45,000 FCFA</p>
                </div>

                {/* Transaction 5 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="ph ph-credit-card text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Lucas Moreau</p>
                            <p className="text-xs text-gray-500">ORD-2024-156 • Carte bancaire</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+12,300 FCFA</p>
                </div>

                {/* Transaction 6 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                            <i className="ph ph-money text-lg"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Véronique Carrel</p>
                            <p className="text-xs text-gray-500">ORD-2024-155 • Espèces</p>
                        </div>
                    </div>
                    <p className="font-bold text-gray-900">+23,900 FCFA</p>
                </div>
            </div>

            <button onClick={() => router.push('/agent-transactions')} className="w-full mt-4 py-2.5 text-brand font-semibold text-sm border border-dashed border-brand rounded-lg hover:bg-brand-50 transition-all">
                Voir toutes les transactions
            </button>
        </div>

    </main>
        </div>
      </>
    );
}
