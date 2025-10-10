import React from "react";

interface PromiseItemProps {
    icon: any;
    title: string;
    text: string;
}

const PromiseItem : React.FC<PromiseItemProps> = ({ icon, title, text }) => {
    return (
        <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="w-8 h-8" />
            <div className="flex flex-col">
                <h4 className="font-bold text-sm">{title}</h4>
                <span className="text-xs text-gray-600">{text}</span>
            </div>
        </div>
        
    );
};

export default PromiseItem