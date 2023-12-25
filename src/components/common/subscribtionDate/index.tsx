'use client';

import React from 'react';

function SubscriptionDate({ date }: { date: string }) {

    return (
        <div className="bg-white py-5 rounded-4 flex gap-2 justify-center items-center">
            <span className="text-heading-ss-bold lg:text-text-m-bold text-[#3C4045]">
                Действие подписки до:
            </span>

            <span className="text-heading-ss-bold lg:text-text-m-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
                {date}
            </span>
        </div>
    );
}

export default React.memo(SubscriptionDate);
