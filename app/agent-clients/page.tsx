'use client';

import { useRouter } from 'next/navigation';

export default function AgentClientsPage() {
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
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>
            
            <button onClick={() => router.push('/agent-storage')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-archive-box text-lg"></i>
                <span>Rangement</span>
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
            <h1 className="text-3xl font-bold text-gray-900">Gestion des clients</h1>
            <p className="text-gray-500 mt-1">Consultez les informations de vos clients</p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
            <input type="text" placeholder="Rechercher par nom ou téléphone..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" />
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Client Card 1 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-brand-50 text-brand flex items-center justify-center font-bold text-lg">
                            MD
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Marie Dubois</h3>
                            <p className="text-xs text-gray-500 mt-1">Gold Member</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>06 45 32 11 22</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>marie@example.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">24</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">185k FCFA</p>
                    </div>
                </div>

                <button onClick={() => router.push('/agent-client-profile')} className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>

            {/* Client Card 2 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                            JM
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Jean Martin</h3>
                            <p className="text-xs text-gray-500 mt-1">Standard</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>07 12 34 56 78</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>jean@example.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">78k FCFA</p>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>

            {/* Client Card 3 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
                            SB
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Sophie Bernard</h3>
                            <p className="text-xs text-gray-500 mt-1">Silver</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>06 78 90 12 34</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>sophie@example.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">52k FCFA</p>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>

            {/* Client Card 4 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                            HP
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Hôtel de Paris</h3>
                            <p className="text-xs text-gray-500 mt-1">Corporate</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>01 45 67 89 00</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>contact@hotelparis.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">45</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">320k FCFA</p>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>

            {/* Client Card 5 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-lg">
                            LM
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Lucas Moreau</h3>
                            <p className="text-xs text-gray-500 mt-1">Standard</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>06 11 22 33 44</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>lucas@example.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">6</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">35k FCFA</p>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>

            {/* Client Card 6 */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 hover:shadow-glass hover:border-brand transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
                            VC
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Véronique Carrel</h3>
                            <p className="text-xs text-gray-500 mt-1">Gold</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-brand transition-colors">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600"><i className="ph ph-phone mr-2"></i>06 99 88 77 66</p>
                    <p className="text-sm text-gray-600"><i className="ph ph-envelope mr-2"></i>veronique@example.com</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <p className="text-xs text-gray-500">Commandes</p>
                        <p className="text-2xl font-bold text-gray-900">19</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total dépensé</p>
                        <p className="text-lg font-bold text-brand">142k FCFA</p>
                    </div>
                </div>

                <button className="w-full py-2.5 px-4 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                    Voir profil
                </button>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
