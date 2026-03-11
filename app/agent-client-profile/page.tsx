'use client';

import { useRouter } from 'next/navigation';

export default function AgentClientProfilePage() {
  const router = useRouter();

  const logout = () => {
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
                <span className="font-bold text-lg tracking-tight text-gray-900">Pressly</span>
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
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6">
        
        {/* Header with Back Button */}
        <div className="mb-8 flex items-center gap-4">
            <button onClick={() => router.push('/agent-clients')} className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-all">
                <i className="ph ph-arrow-left text-lg"></i>
                <span>Retour</span>
            </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                        MD
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marie Dubois</h1>
                        <p className="text-gray-500 mb-4">Client depuis 2 ans</p>
                        <div className="flex items-center gap-6">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Statut</p>
                                <span className="inline-block mt-1 px-3 py-1 bg-amber-100 text-amber-700 font-bold text-xs rounded-full">
                                    <i className="ph-fill ph-crown inline mr-1"></i>Platinum Member
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-all">
                        <i className="ph ph-phone text-xl"></i>
                    </button>
                    <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-all">
                        <i className="ph ph-envelope text-xl"></i>
                    </button>
                    <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-all">
                        <i className="ph ph-dots-three-vertical text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Informations de contact</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Téléphone</p>
                        <p className="text-gray-900 font-medium">06 45 32 11 22</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Email</p>
                        <p className="text-gray-900 font-medium">marie.dubois@email.com</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Adresse</p>
                        <p className="text-gray-900 font-medium">45 Rue de la Paix, 75000 Paris</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Code Postal</p>
                        <p className="text-gray-900 font-medium">75000</p>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Commandes totales</p>
                    <p className="text-3xl font-bold text-gray-900">24</p>
                    <p className="text-xs text-brand mt-2">↑ 2 cette semaine</p>
                </div>
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Total dépensé</p>
                    <p className="text-3xl font-bold text-brand">185k FCFA</p>
                    <p className="text-xs text-gray-600 mt-2">Moyenne : 7.7k FCFA</p>
                </div>
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fidélité</p>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-gray-900">92%</span>
                        <i className="ph-fill ph-star text-amber-400 text-2xl mb-1"></i>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Depuis</p>
                    <p className="text-lg font-bold text-gray-900">2 ans</p>
                    <p className="text-xs text-gray-600 mt-2">Depuis 2022</p>
                </div>
            </div>
        </div>

        {/* Commandes Récentes */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Commandes récentes</h2>
            <div className="space-y-4">
                {/* Order 1 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">ORD-2024-160</p>
                        <p className="text-sm text-gray-500">Nettoyage à sec • Costume, Chemise</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-900">15,500 FCFA</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 font-bold text-[10px] rounded-full">Prête</span>
                    </div>
                </div>

                {/* Order 2 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">ORD-2024-148</p>
                        <p className="text-sm text-gray-500">Lavage & Repassage • 3 Chemises, Pantalon</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-900">12,000 FCFA</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-200 text-gray-700 font-bold text-[10px] rounded-full">Livrée</span>
                    </div>
                </div>

                {/* Order 3 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">ORD-2024-135</p>
                        <p className="text-sm text-gray-500">Nettoyage Délicat • Robe de soirée</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-900">18,000 FCFA</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-200 text-gray-700 font-bold text-[10px] rounded-full">Livrée</span>
                    </div>
                </div>

                {/* Order 4 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">ORD-2024-125</p>
                        <p className="text-sm text-gray-500">Lavage Standard • 15kg de vêtements</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-900">8,500 FCFA</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-200 text-gray-700 font-bold text-[10px] rounded-full">Livrée</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Préférences de service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Services préférés</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <span className="text-gray-700 font-medium">Nettoyage à sec</span>
                        <span className="text-gray-600 text-sm">12 commandes</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <span className="text-gray-700 font-medium">Lavage & Repassage</span>
                        <span className="text-gray-600 text-sm">8 commandes</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <span className="text-gray-700 font-medium">Nettoyage Délicat</span>
                        <span className="text-gray-600 text-sm">4 commandes</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Notes et commentaires</h2>
                <textarea placeholder="Ajouter une note interne..." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" rows={4}>Client régulier très satisfait. Préfère le nettoyage à sec. Souvent en urgence.</textarea>
                <button className="mt-3 px-4 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand-dark transition-all text-sm">
                    Enregistrer
                </button>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
