import React, { useState } from 'react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccess: () => void;
}

export function AdminModal({ isOpen, onClose, onAccess }: AdminModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'bootis@123') {
      setError('');
      setPassword('');
      onAccess();
    } else {
      setError('Senha incorreta');
    }
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute bg-[rgba(81,81,81,0.75)] inset-0" onClick={handleClose} />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border border-[#eaeaea] w-96 shadow-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-bold text-[#333333]">Área do Admin</h2>
            <button
              onClick={handleClose}
              className="text-[#c4c4c4] hover:text-[#333333] transition-colors"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-password" className="block text-[14px] font-semibold text-[#333333] mb-2">
                Senha
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); // Clear error when user types
                }}
                className="w-full px-3 py-2 border border-[#eaeaea] rounded-lg bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#5e50f2] focus:border-transparent"
                placeholder="Digite a senha"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[12px] mt-1">{error}</p>
              )}
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-[#333333] bg-[#e7e7e7] rounded-lg hover:bg-[#d7d7d7] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#5e50f2] text-white rounded-lg hover:bg-[#4a3fd1] transition-colors"
              >
                Acessar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
