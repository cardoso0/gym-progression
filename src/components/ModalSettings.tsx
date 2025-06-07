import { useEffect, useRef } from "react";
import engIcon from '../assets/eng.svg';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BtnSettingsProps {
  setValue: (value: boolean) => void;
}

export function ModalSettings({ isOpen, onClose }: SettingsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="p-4 rounded-2xl bg-white shadow-md w-full max-w-fit mx-auto relative px-[25px] py-10"
      >
        <button
          onClick={onClose}
          className="absolute top-[-5px] right-[-7px] text-black hover:text-black-700 bg-transparent px-[15px] py-[5px];"
          aria-label="Fechar Modal"
        >
          <span className="text-xl">×</span>
        </button>
        <p className="text-base font-medium text-gray-800 flex items-center justify-between">
          Ordenar treinos
        </p>
      </div>
    </div>
  );
}

export function BtnSettings({ setValue }: BtnSettingsProps,) {
  return (
    <div>
      <button
        onClick={() => setValue(true)}
        type="button"
        aria-label="Abrir configurações"
        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <img src={engIcon} alt="eng" />
      </button>
    </div>
  );
}
