import { dirxml } from 'console';
import { div } from 'motion/react-m';
import React, {ReactNode} from 'react'

interface DialogProps {
    isOpen : boolean;
    onClose: () => void;
    children: ReactNode;
}

export const  DialogBox:React.FC<DialogProps> = ({isOpen, onClose, children}) => {
    if(!isOpen) return null ;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

