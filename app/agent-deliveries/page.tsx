'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AgentDeliveriesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('active');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      router.push('/login');
    }
  };

  const switchTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const openAssignModal = () => {
    setIsModalOpen(true);
  };

  const closeAssignModal = () => {
    setIsModalOpen(false);
  };

  const assignDriver = (driverName: string) => {
    alert(`Assigné à ${driverName}`);
    closeAssignModal();
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
                <i className="ph ph-truck text-lg"></i>
                <span>Livraisons</span>
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
        
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Gestion des livraisons</h1>
            <p className="text-gray-500 mt-1">Suivi des livraisons et gestion des livreurs</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Active Deliveries */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Livraisons actives</p>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="ph ph-truck text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">5</h2>
                <p className="text-blue-600 font-semibold text-sm mt-2">En cours de route</p>
            </div>

            {/* Completed Today */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Complétées aujourd'hui</p>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <i className="ph ph-check-circle text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">12</h2>
                <p className="text-emerald-600 font-semibold text-sm mt-2">Toutes livrées</p>
            </div>

            {/* Available Drivers */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">Livreurs disponibles</p>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <i className="ph ph-user-circle text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">3</h2>
                <p className="text-amber-600 font-semibold text-sm mt-2">Prêts à livrer</p>
            </div>

            {/* Pending Assignments */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase">En attente d'assignation</p>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                        <i className="ph ph-hourglass-high text-xl"></i>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">2</h2>
                <p className="text-red-600 font-semibold text-sm mt-2">À assigner</p>
            </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 mb-6">
            <div className="flex border-b border-gray-100">
                <button onClick={() => switchTab('active')} className={`flex-1 py-4 px-6 font-semibold border-b-2 transition-all text-center ${activeTab === 'active' ? 'border-brand text-brand' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>
                    <i className="ph ph-truck inline mr-2"></i>Livraisons actives (5)
                </button>
                <button onClick={() => switchTab('drivers')} className={`flex-1 py-4 px-6 font-semibold border-b-2 transition-all text-center ${activeTab === 'drivers' ? 'border-brand text-brand' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>
                    <i className="ph ph-users inline mr-2"></i>Livreurs (4)
                </button>
                <button onClick={() => switchTab('history')} className={`flex-1 py-4 px-6 font-semibold border-b-2 transition-all text-center ${activeTab === 'history' ? 'border-brand text-brand' : 'border-transparent text-gray-600 hover:text-gray-800'}`}>
                    <i className="ph ph-history inline mr-2"></i>Historique
                </button>
            </div>

            {/* Active Deliveries Tab */}
            <div id="active-tab" className={`p-6 ${activeTab !== 'active' ? 'hidden' : ''}`}>
                <div className="space-y-4">
                    {/* Delivery Card 1 */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-brand hover:shadow-glass transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-600 uppercase mb-1">LIV-2024-047</p>
                                <h3 className="text-lg font-bold text-gray-900">Commande ORD-2024-160</h3>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">EN ROUTE</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Livreur</p>
                                <p className="font-semibold text-gray-900">Marc Leblanc</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Client</p>
                                <p className="font-semibold text-gray-900">Marie Rousseau</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Distance</p>
                                <p className="font-semibold text-gray-900">2.3 km</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">ETA</p>
                                <p className="font-semibold text-gray-900">14 min</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Statut</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="font-semibold text-gray-900">En route</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <button onClick={() => router.push('/delivery-tracking')} className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                                <i className="ph ph-map-pin"></i>Suivre en direct
                            </button>
                            <button onClick={openAssignModal} className="flex-1 py-2 px-3 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-600 hover:text-white font-semibold text-sm transition-all">
                                Changer le livreur
                            </button>
                            <button className="py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm transition-all">
                                <i className="ph ph-phone"></i>
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-gray-100 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">65% du chemin complété</p>
                    </div>

                    {/* Delivery Card 2 */}
                    <div className="border border-gray-200 rounded-xl p-5 hover:border-brand hover:shadow-glass transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-600 uppercase mb-1">LIV-2024-048</p>
                                <h3 className="text-lg font-bold text-gray-900">Commande ORD-2024-159</h3>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">EN ROUTE</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Livreur</p>
                                <p className="font-semibold text-gray-900">Sophie Durand</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Client</p>
                                <p className="font-semibold text-gray-900">Jean Dupont</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Distance</p>
                                <p className="font-semibold text-gray-900">1.8 km</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">ETA</p>
                                <p className="font-semibold text-gray-900">10 min</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Statut</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="font-semibold text-gray-900">En route</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <button onClick={() => router.push('/delivery-tracking')} className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                                <i className="ph ph-map-pin"></i>Suivre en direct
                            </button>
                            <button onClick={() => openAssignModal()} className="flex-1 py-2 px-3 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-600 hover:text-white font-semibold text-sm transition-all">
                                Changer le livreur
                            </button>
                            <button className="py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm transition-all">
                                <i className="ph ph-phone"></i>
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-gray-100 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">40% du chemin complété</p>
                    </div>

                    {/* More deliveries... */}
                    <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center">
                        <p className="text-gray-600 font-medium">+3 autres livraisons en cours</p>
                    </div>
                </div>
            </div>

            {/* Drivers Tab */}
            <div id="drivers-tab" className={`p-6 ${activeTab !== 'drivers' ? 'hidden' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Driver Card 1 */}
                    <div className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold">
                                    ML
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Marc Leblanc</h3>
                                    <p className="text-xs text-gray-500">DRV-001</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">ACTIF</span>
                        </div>

                        <div className="space-y-3 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Livraisons aujourd'hui:</span>
                                <span className="font-semibold text-gray-900">5</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Note moyenne:</span>
                                <span className="font-semibold text-gray-900 flex items-center gap-1">
                                    <i className="ph-fill ph-star text-amber-400"></i> 4.7/5
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Statut:</span>
                                <span className="font-semibold text-blue-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>En livraison
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                                Voir détails
                            </button>
                            <button className="py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm transition-all">
                                <i className="ph ph-phone"></i>
                            </button>
                        </div>
                    </div>

                    {/* Driver Card 2 */}
                    <div className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center font-bold">
                                    SD
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Sophie Durand</h3>
                                    <p className="text-xs text-gray-500">DRV-002</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">ACTIF</span>
                        </div>

                        <div className="space-y-3 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Livraisons aujourd'hui:</span>
                                <span className="font-semibold text-gray-900">4</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Note moyenne:</span>
                                <span className="font-semibold text-gray-900 flex items-center gap-1">
                                    <i className="ph-fill ph-star text-amber-400"></i> 4.9/5
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Statut:</span>
                                <span className="font-semibold text-blue-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>En livraison
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 px-3 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white font-semibold text-sm transition-all">
                                Voir détails
                            </button>
                            <button className="py-2 px-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm transition-all">
                                <i className="ph ph-phone"></i>
                            </button>
                        </div>
                    </div>

                    {/* Driver Card 3 - Available */}
                    <div className="border border-dashed border-gray-300 rounded-xl p-5 bg-gray-50">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold">
                                    TP
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Thomas Petit</h3>
                                    <p className="text-xs text-gray-500">DRV-003</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">DISPONIBLE</span>
                        </div>

                        <div className="space-y-3 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Livraisons aujourd'hui:</span>
                                <span className="font-semibold text-gray-900">2</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Note moyenne:</span>
                                <span className="font-semibold text-gray-900 flex items-center gap-1">
                                    <i className="ph-fill ph-star text-amber-400"></i> 4.6/5
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Statut:</span>
                                <span className="font-semibold text-amber-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>Disponible
                                </span>
                            </div>
                        </div>

                        <button className="w-full py-2 px-3 bg-brand text-white rounded-lg hover:bg-brand-dark font-semibold text-sm transition-all">
                            Assigner une commande
                        </button>
                    </div>

                    {/* Driver Card 4 */}
                    <div className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold">
                                    JM
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Jean Marchand</h3>
                                    <p className="text-xs text-gray-500">DRV-004</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold">HORS LIGNE</span>
                        </div>

                        <div className="space-y-3 mb-4 pb-4 border-b border-gray-100 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Livraisons aujourd'hui:</span>
                                <span className="font-semibold text-gray-900">3</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Note moyenne:</span>
                                <span className="font-semibold text-gray-900 flex items-center gap-1">
                                    <i className="ph-fill ph-star text-amber-400"></i> 4.5/5
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Statut:</span>
                                <span className="font-semibold text-gray-600 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>Hors ligne
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed font-semibold text-sm transition-all opacity-50">
                                Voir détails
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Tab */}
            <div id="history-tab" className={`p-6 ${activeTab !== 'history' ? 'hidden' : ''}`}>
                <div className="space-y-3">
                    {/* Completed Delivery 1 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <i className="ph ph-check-circle text-lg"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">LIV-2024-045 - ORD-2024-158</p>
                                <p className="text-xs text-gray-500 mt-0.5">Marc Leblanc • Sophie Martin • Livré à 16:45</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">8,500 FCFA</p>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <i className="ph ph-check-circle text-lg"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">LIV-2024-046 - ORD-2024-157</p>
                                <p className="text-xs text-gray-500 mt-0.5">Sophie Durand • Hôtel de Paris • Livré à 15:20</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">45,000 FCFA</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Pending Orders to Assign */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ph ph-hourglass-high text-red-600"></i>
                Commandes en attente d'assignation (2)
            </h2>

            <div className="space-y-4">
                {/* Pending Order 1 */}
                <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase mb-1">ORD-2024-161</p>
                            <h3 className="text-lg font-bold text-gray-900">Véronique Carrel</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">NON ASSIGNÉE</span>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">Livraison à: 45 Avenue des Champs-Élysées, 75008 Paris</p>

                    <div className="flex gap-2">
                        <button onClick={openAssignModal} className="flex-1 py-2 px-4 bg-brand text-white rounded-lg hover:bg-brand-dark font-semibold text-sm transition-all flex items-center justify-center gap-2">
                            <i className="ph ph-user-plus"></i>Assigner un livreur
                        </button>
                        <button className="py-2 px-4 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 font-semibold text-sm transition-all">
                            <i className="ph ph-x"></i>
                        </button>
                    </div>
                </div>

                {/* Pending Order 2 */}
                <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <p className="text-xs font-semibold text-gray-600 uppercase mb-1">ORD-2024-162</p>
                            <h3 className="text-lg font-bold text-gray-900">Lucas Moreau</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">NON ASSIGNÉE</span>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">Livraison à: 78 Boulevard Saint-Germain, 75005 Paris</p>

                    <div className="flex gap-2">
                        <button onClick={openAssignModal} className="flex-1 py-2 px-4 bg-brand text-white rounded-lg hover:bg-brand-dark font-semibold text-sm transition-all flex items-center justify-center gap-2">
                            <i className="ph ph-user-plus"></i>Assigner un livreur
                        </button>
                        <button className="py-2 px-4 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 font-semibold text-sm transition-all">
                            <i className="ph ph-x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    {/* Assign Driver Modal */}
    <div id="assignModal" className={`${isModalOpen ? '' : 'hidden'} fixed inset-0 bg-black/30 z-50 flex items-center justify-center`}>
        <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Assigner un livreur</h2>
                    <button onClick={closeAssignModal} className="text-gray-500 hover:text-gray-700">
                        <i className="ph ph-x text-2xl"></i>
                    </button>
                </div>
            </div>

            <div className="p-6 space-y-3">
                {/* Available Drivers List */}
                <div className="space-y-2">
                    {/* Driver Option 1 */}
                    <button onClick={() => assignDriver('Marc Leblanc')} className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-brand hover:bg-brand-50 transition-all group">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                ML
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Marc Leblanc</p>
                                <p className="text-xs text-gray-500">5 livraisons • 4.7⭐</p>
                            </div>
                        </div>
                    </button>

                    {/* Driver Option 2 */}
                    <button onClick={() => assignDriver('Sophie Durand')} className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-brand hover:bg-brand-50 transition-all group">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                                SD
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Sophie Durand</p>
                                <p className="text-xs text-gray-500">4 livraisons • 4.9⭐</p>
                            </div>
                        </div>
                    </button>

                    {/* Driver Option 3 */}
                    <button onClick={() => assignDriver('Thomas Petit')} className="w-full text-left p-4 border border-green-200 rounded-xl hover:border-brand hover:bg-brand-50 transition-all group bg-green-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                TP
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Thomas Petit</p>
                                <p className="text-xs text-green-600 font-semibold">Disponible maintenant</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="p-6 border-t border-gray-100 space-y-3">
                <button onClick={closeAssignModal} className="w-full py-2.5 px-4 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-semibold transition-all">
                    Annuler
                </button>
            </div>
        </div>
    </div>
        </div>
      </>
    );
}
