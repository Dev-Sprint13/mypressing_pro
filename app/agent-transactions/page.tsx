'use client';

import { useRouter } from 'next/navigation';

export default function AgentTransactionsPage() {
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
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
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
        <div className="mb-8 flex items-center gap-4">
            <button onClick={() => router.push('/agent-cash')} className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-all">
                <i className="ph ph-arrow-left text-lg"></i>
                <span>Retour</span>
            </button>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Historique des transactions</h1>
                <p className="text-gray-500 mt-1">Tous les paiements et mouvements de caisse</p>
            </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher</label>
                    <input type="text" placeholder="Nom client ou numéro..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5">
                        <option>Tous les types</option>
                        <option>Vente</option>
                        <option>Remboursement</option>
                        <option>Dépôt</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mode de paiement</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5">
                        <option>Tous</option>
                        <option>Espèces</option>
                        <option>Carte bancaire</option>
                        <option>Sur compte</option>
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Total des entrées</p>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <i className="ph ph-wallet text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">142,340</h2>
                <p className="text-emerald-600 font-semibold text-sm mt-2">FCFA</p>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Nombre de transactions</p>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="ph ph-list text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">48</h2>
                <p className="text-blue-600 font-semibold text-sm mt-2">transactions</p>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Ticket moyen</p>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <i className="ph ph-percent text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">2,965</h2>
                <p className="text-amber-600 font-semibold text-sm mt-2">FCFA en moyenne</p>
            </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Date & Heure</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Numéro</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Client</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Mode de paiement</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Montant</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Statut</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Transaction 1 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">16:45</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-160</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand flex items-center justify-center font-semibold text-xs">MR</div>
                                    <span className="text-gray-900">Marie Rousseau</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-money text-amber-600"></i>
                                    <span className="text-gray-900">Espèces</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+15,500 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 2 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">15:20</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-159</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs">JD</div>
                                    <span className="text-gray-900">Jean Dupont</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-credit-card text-blue-600"></i>
                                    <span className="text-gray-900">Carte bancaire</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+22,000 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 3 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">14:30</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-158</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-semibold text-xs">SM</div>
                                    <span className="text-gray-900">Sophie Martin</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-money text-amber-600"></i>
                                    <span className="text-gray-900">Espèces</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+8,500 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 4 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">12:15</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-157</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-semibold text-xs">HP</div>
                                    <span className="text-gray-900">Hôtel de Paris</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">Dépôt</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-file-text text-gray-600"></i>
                                    <span className="text-gray-900">Sur compte</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+45,000 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-bold">En attente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 5 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">11:00</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-156</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold text-xs">LM</div>
                                    <span className="text-gray-900">Lucas Moreau</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-credit-card text-blue-600"></i>
                                    <span className="text-gray-900">Carte bancaire</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+12,300 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 6 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">22 Déc 2024</p>
                                    <p className="text-xs text-gray-500">09:45</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-155</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold text-xs">VC</div>
                                    <span className="text-gray-900">Véronique Carrel</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-money text-amber-600"></i>
                                    <span className="text-gray-900">Espèces</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+23,900 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 7 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">21 Déc 2024</p>
                                    <p className="text-xs text-gray-500">17:30</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-154</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-xs">NC</div>
                                    <span className="text-gray-900">Nicolas Collet</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">Remboursement</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-credit-card text-blue-600"></i>
                                    <span className="text-gray-900">Carte bancaire</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-red-600">-5,200 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>

                        {/* Transaction 8 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-900">21 Déc 2024</p>
                                    <p className="text-xs text-gray-500">14:00</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">ORD-2024-153</td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs">AB</div>
                                    <span className="text-gray-900">Antoinette Blain</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Vente</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-money text-amber-600"></i>
                                    <span className="text-gray-900">Espèces</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">+18,750 FCFA</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Complétée</span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-brand hover:underline font-semibold">Voir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-sm text-gray-600">Affichage 1 à 8 sur 48 transactions</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-700 transition-all">Précédent</button>
                    <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark font-semibold text-sm transition-all">1</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-700 transition-all">2</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-700 transition-all">3</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-700 transition-all">Suivant</button>
                </div>
            </div>
        </div>

    </main>
        </div>
      </>
    );
}
