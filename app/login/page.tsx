'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const quickLogin = (email: string, role: string) => {
        if (emailRef.current && passwordRef.current) {
            emailRef.current.value = email;
            passwordRef.current.value = role + '123';
            handleLogin(new Event('submit') as any);
        }
    };

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        // Mock authentication
        let userRole = null;
        
        if (email === 'admin@pressingpro.com' && password === 'admin123') {
            userRole = 'admin';
        } else if (email === 'agent@pressingpro.com' && password === 'agent123') {
            userRole = 'agent';
        } else {
            alert('Identifiants invalides. Veuillez utiliser les identifiants de démonstration.');
            return;
        }

        // Store user session
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1));

        // Redirect based on role
        if (userRole === 'admin') {
            router.push('/home');
        } else if (userRole === 'agent') {
            router.push('/agent_dashboard');
        }
    };
    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center font-sans selection:bg-brand-light selection:text-white">
          <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Brand Section */}
            <div className="hidden md:flex flex-col justify-center items-start gap-8 opacity-0 animate-fade-in">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg text-white flex items-center justify-center shadow-lg">
                        <i className="ph-bold ph-drop text-2xl"></i>
                    </div>
                    <span className="font-bold text-3xl tracking-tight text-gray-900">PressingPro</span>
                </div>
                
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        Gérez votre pressing<br />
                        <span className="text-brand">avec confiance</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Tableau de bord intuitif conçu pour les responsables et agents de pressing modernes.
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-50 text-brand flex items-center justify-center flex-shrink-0">
                            <i className="ph ph-check text-lg font-bold"></i>
                        </div>
                        <p className="text-gray-700 font-medium">Gestion complète des commandes</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-50 text-brand flex items-center justify-center flex-shrink-0">
                            <i className="ph ph-check text-lg font-bold"></i>
                        </div>
                        <p className="text-gray-700 font-medium">Suivi temps réel des clients</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-50 text-brand flex items-center justify-center flex-shrink-0">
                            <i className="ph ph-check text-lg font-bold"></i>
                        </div>
                        <p className="text-gray-700 font-medium">Rapports et analytique détaillés</p>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-500">
                    Version de démonstration • Aucune donnée réelle n'est collectée
                </p>
            </div>

            {/* Right: Login Form */}
            <div className="opacity-0 animate-slide-up">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Bienvenue</h2>
                    <p className="text-gray-500 text-sm mb-8">
                        Connectez-vous avec des rôles différents pour explorer le système
                    </p>

                    {/* Demo Credentials Info */}
                    <div className="mb-8 p-4 bg-brand-50 border border-brand-100 rounded-xl">
                        <p className="text-xs font-bold text-brand mb-3 uppercase tracking-wide">Identifiants de démonstration</p>
                        <div className="space-y-2 text-xs text-gray-700">
                            <div className="flex justify-between">
                                <span><strong>Admin:</strong> admin@pressingpro.com</span>
                                <span className="text-gray-500">| Mot de passe: admin123</span>
                            </div>
                            <div className="flex justify-between">
                                <span><strong>Agent:</strong> agent@pressingpro.com</span>
                                <span className="text-gray-500">| Mot de passe: agent123</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form id="loginForm" onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                            <input 
                                type="email" 
                                id="email"
                                ref={emailRef}
                                placeholder="votre@email.com" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5"
                                required
                             />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                            <input 
                                type="password" 
                                id="password"
                                ref={passwordRef}
                                placeholder="••••••••" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5"
                                required
                             />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-brand cursor-pointer" />
                            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                                Se souvenir de moi
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all duration-200 shadow-lg shadow-brand/20 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <i className="ph ph-sign-in text-lg"></i>
                            Se connecter
                        </button>
                    </form>

                    {/* Quick Login Buttons for Demo */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Connexion rapide</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={() => quickLogin('admin@pressingpro.com', 'admin')}
                                type="button"
                                className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                            >
                                <i className="ph ph-user-circle-gear"></i>
                                Admin
                            </button>
                            <button 
                                onClick={() => quickLogin('agent@pressingpro.com', 'agent')}
                                type="button"
                                className="py-2.5 px-4 bg-brand-50 hover:bg-brand-100 text-brand font-medium rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                            >
                                <i className="ph ph-user-circle"></i>
                                Agent
                            </button>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <p className="text-xs text-gray-500 text-center mt-8">
                        Ceci est une démonstration interactive.<br />
                        Aucun compte n'est créé ou stocké.
                    </p>
                </div>
            </div>
        </div>
    </div>
        </div>
      </>
    );
}
