'use client';

import { useRouter } from 'next/navigation';

export default function AgentDashboardPage() {
  const router = useRouter();

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Sidebar Navigation */}
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-40 overflow-y-auto flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                    <i className="ph-bold ph-drop text-lg"></i>
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900">PressingPro</span>
            </div>
            <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-brand-50 text-brand rounded-full">AGENT</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1">
            <button onClick={() => router.push('/agent-dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
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
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-100">
            <button onClick={() => router.push('/login')} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6 opacity-0 animate-fade-in">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 opacity-0 animate-slide-up">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    Bonjour <span className="origin-bottom-right inline-block hover:animate-pulse">👋</span>
                </h1>
                <p className="text-gray-500 mt-1">Bienvenue au comptoir</p>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors relative">
                    <i className="ph ph-bell text-xl"></i>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>
                
                <div className="h-6 w-px bg-gray-200"></div>
                
                <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                    <span className="text-sm font-medium text-gray-700">Agent</span>
                </div>
            </div>
        </div>

        {/* Primary Action: Nouvelle Commande Button */}
        <div className="mb-8 opacity-0 animate-slide-up delay-100">
            <button onClick={() => router.push('/agent-new-order')} className="w-full py-4 bg-gradient-to-r from-brand to-brand-dark text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95 shadow-lg">
                <i className="ph ph-plus-circle text-2xl group-hover:animate-pulse"></i>
                <span className="text-lg">Créer une nouvelle commande</span>
                <i className="ph ph-arrow-right text-lg group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 opacity-0 animate-slide-up delay-200">
            {/* Card 1: Orders Today */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Commandes du jour</p>
                        <h3 className="text-3xl font-bold text-gray-900">18</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center">
                        <i className="ph ph-shopping-bag text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold">
                        <i className="ph-bold ph-trend-up"></i> +8%
                    </span>
                    <span className="text-xs text-gray-400">vs hier</span>
                </div>
            </div>

            {/* Card 2: Ready for Pickup */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Prêtes pour retrait</p>
                        <h3 className="text-3xl font-bold text-gray-900">6</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <i className="ph ph-check-circle text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <button className="text-xs text-emerald-600 font-semibold hover:underline">Voir les détails</button>
                </div>
            </div>

            {/* Card 3: Awaiting Pickup */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">En attente de retrait</p>
                        <h3 className="text-3xl font-bold text-gray-900">4</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="ph ph-hourglass-high text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">
                        <i className="ph-bold ph-clock"></i> À rappeler
                    </span>
                </div>
            </div>

            {/* Card 4: Today's Revenue */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Revenus du jour</p>
                        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">142k <span className="text-xl font-semibold text-gray-400">FCFA</span></h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <i className="ph ph-wallet text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold">
                        <i className="ph-bold ph-trend-up"></i> +12%
                    </span>
                </div>
            </div>
        </div>

        {/* Quick Access Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-0 animate-slide-up delay-300">
            {/* Recent Orders */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Commandes récentes</h2>
                
                <div className="space-y-3">
                    {/* Order 1 */}
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-brand hover:bg-brand-50 transition-all cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">ORD-2024-158</p>
                                <p className="text-xs text-gray-500 mt-1">Marie Rousseau • Nettoyage à sec</p>
                            </div>
                            <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">PRÊTE</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs">
                            <span className="text-gray-600 font-medium">15 500 FCFA</span>
                            <button className="text-brand font-semibold group-hover:underline">Détails →</button>
                        </div>
                    </div>

                    {/* Order 2 */}
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-brand hover:bg-brand-50 transition-all cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">ORD-2024-159</p>
                                <p className="text-xs text-gray-500 mt-1">Jean Dupont • Lavage & Repassage</p>
                            </div>
                            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">EN COURS</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs">
                            <span className="text-gray-600 font-medium">22 000 FCFA</span>
                            <button className="text-brand font-semibold group-hover:underline">Détails →</button>
                        </div>
                    </div>

                    {/* Order 3 */}
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-brand hover:bg-brand-50 transition-all cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">ORD-2024-160</p>
                                <p className="text-xs text-gray-500 mt-1">Sophie Martin • Lavage Standard</p>
                            </div>
                            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold">REÇUE</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs">
                            <span className="text-gray-600 font-medium">8 500 FCFA</span>
                            <button className="text-brand font-semibold group-hover:underline">Détails →</button>
                        </div>
                    </div>
                </div>

                <button onClick={() => router.push('/agent-orders')} className="w-full mt-6 py-2.5 rounded-xl border border-dashed border-gray-300 text-gray-600 text-sm font-medium hover:border-brand hover:text-brand transition-colors bg-gray-50 hover:bg-brand-50">
                    Voir toutes les commandes
                </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Statistiques rapides</h2>
                
                <div className="space-y-5">
                    {/* Stat 1 */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Commandes traitées</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">102</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Cette semaine</p>
                            <p className="text-sm font-semibold text-emerald-600 mt-1">+18%</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Ticket moyen</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">12,450 FCFA</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Aujourd'hui</p>
                            <p className="text-sm font-semibold text-emerald-600 mt-1">+5%</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Taux de satisfaction</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">4.8/5</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Notation moyenne</p>
                            <div className="flex gap-1 mt-1">
                                <i className="ph-fill ph-star text-amber-400"></i>
                                <i className="ph-fill ph-star text-amber-400"></i>
                                <i className="ph-fill ph-star text-amber-400"></i>
                                <i className="ph-fill ph-star text-amber-400"></i>
                                <i className="ph-fill ph-star text-amber-300"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={() => router.push('/agent-cash')} className="w-full mt-6 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-all">
                    Accéder à la caisse
                </button>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
