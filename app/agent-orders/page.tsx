'use client';

import { useRouter } from 'next/navigation';

export default function AgentOrdersPage() {
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
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-list-checks text-lg"></i>
                <span>Commandes</span>
            </button>
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
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
            <h1 className="text-3xl font-bold text-gray-900">Gestion des commandes</h1>
            <p className="text-gray-500 mt-1">Voir et gérer toutes les commandes</p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher</label>
                    <input type="text" placeholder="Nom client ou numéro..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5">
                        <option>Tous les statuts</option>
                        <option>Reçue</option>
                        <option>En cours</option>
                        <option>Prête</option>
                        <option>Livrée</option>
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                    <button className="w-full py-2.5 px-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all text-sm">
                        Filtrer
                    </button>
                </div>
            </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
            {/* Order Card 1 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">ORD-2024-160</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">Marie Rousseau</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">Prête</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Service</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Nettoyage à sec</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Articles</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Costume, Chemise</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Montant</p>
                        <p className="font-semibold text-gray-900 mt-0.5">15,500 FCFA</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Date de retrait</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Aujourd'hui • 14h</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => router.push('/agent-order-details')} className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Voir détails
                    </button>
                    <button className="flex-1 py-2 px-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white font-semibold text-sm transition-all">
                        Marquer comme livrée
                    </button>
                </div>
            </div>

            {/* Order Card 2 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">ORD-2024-159</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">Jean Dupont</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">En cours</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Service</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Lavage & Repassage</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Articles</p>
                        <p className="font-semibold text-gray-900 mt-0.5">5 Chemises</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Montant</p>
                        <p className="font-semibold text-gray-900 mt-0.5">22,000 FCFA</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Date de retrait</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Demain • 10h</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Voir détails
                    </button>
                    <button className="flex-1 py-2 px-3 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-600 hover:text-white font-semibold text-sm transition-all">
                        Marquer comme prête
                    </button>
                </div>
            </div>

            {/* Order Card 3 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">ORD-2024-158</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">Sophie Martin</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase">Reçue</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Service</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Lavage Standard</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Articles</p>
                        <p className="font-semibold text-gray-900 mt-0.5">10kg de vêtements</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Montant</p>
                        <p className="font-semibold text-gray-900 mt-0.5">8,500 FCFA</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Date de retrait</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Samedi • 15h</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Voir détails
                    </button>
                    <button className="flex-1 py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-sm transition-all">
                        Contacter le client
                    </button>
                </div>
            </div>

            {/* Order Card 4 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase">ORD-2024-157</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">Hôtel de Paris</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold uppercase">Livrée</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Service</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Lavage Industriel</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Articles</p>
                        <p className="font-semibold text-gray-900 mt-0.5">50kg de draps</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Montant</p>
                        <p className="font-semibold text-gray-900 mt-0.5">45,000 FCFA</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Date de retrait</p>
                        <p className="font-semibold text-gray-900 mt-0.5">Hier</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                        Voir détails
                    </button>
                    <button className="flex-1 py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-sm transition-all">
                        Générer facture
                    </button>
                </div>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
