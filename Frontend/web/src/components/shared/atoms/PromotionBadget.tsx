import React from "react";

const PromotionBadget: React.FC<{ amount: number }> = (props) => {
    return (
        <div className="bg-red-500 text-white font-bold text-xs w-fit h-fit py-1 px-2">{`-${props.amount}%`}</div>
    );
};

export default PromotionBadget