import React, { useState } from 'react';
import RankComponent, {TRank} from "../../cards/RankComponent";
import ModalAdvizer from "../../modal/ranks/ModalAdvizer";
import ModalAmbassador from "../../modal/ranks/ModalAmbassador";
import ModalExpert from "../../modal/ranks/ModalExpert";
import ModalHeadliner from "../../modal/ranks/ModalHeadliner";
import ModalResident from "../../modal/ranks/ModalResident";

type TRanksComponent = {
    userRank: TRank['rank'];
}

const USER_RANKS = ["empty", "new", "resident", "headliner", "expert", "ambassador", "adviser"];

export default function RanksComponent({ userRank }: TRanksComponent) {
    const [isExpertModalOpen, setExpertModalOpen] = useState(false);
    const [isAdvizerModalOpen, setAdvizerModalOpen] = useState(false);
    const [isAmbassadorModalOpen, setAmbassadorModalOpen] = useState(false);
    const [isHeadlinerModalOpen, setHeadlinerModalOpen] = useState(false);
    const [isResidentModalOpen, setResidentModalOpen] = useState(false);

    const handleCloseExpertModal = () => {
        setExpertModalOpen(false);
    };

    const handleCloseAdvizerModal = () => {
        setAdvizerModalOpen(false);
    };

    const handleCloseAmbassadorModal = () => {
        setAmbassadorModalOpen(false);
    };

    const handleCloseHeadlinerModal = () => {
        setHeadlinerModalOpen(false);
    };

    const handleCloseResidentModal = () => {
        setResidentModalOpen(false);
    };

    return (
        <div className="p-6 h-full max-h-[500px] big_screen_h:h-auto bg-orange-class ss_lg:h-[304px] rounded-4 bg-white overflow-hidden ss_lg:w-full pt-3 ss_lg:p-2">
            <h3 className="text-heading-s text-white mt-3 ml-4 s_lg:text-heading-ss-bold pb-2">
                Ранги
            </h3>

            <div className="flex flex-col pt-8 rounded-t-5 w-full h-full pb-12 s_lg:pb-5 overflow-y-scroll gap-4 scroll-hidden justify-start">
                <RankComponent active={USER_RANKS.indexOf(userRank) >= USER_RANKS.indexOf("headliner")} rank="headliner" onClick={() => setHeadlinerModalOpen(true)} />
                <RankComponent active={USER_RANKS.indexOf(userRank) >= USER_RANKS.indexOf("adviser")} rank="adviser" onClick={() => setAdvizerModalOpen(true)} />
                <RankComponent active={USER_RANKS.indexOf(userRank) >= USER_RANKS.indexOf("ambassador")} rank="ambassador" onClick={() => setAmbassadorModalOpen(true)} />
                <RankComponent active={USER_RANKS.indexOf(userRank) >= USER_RANKS.indexOf("expert")} rank="expert" onClick={() => setExpertModalOpen(true)} />
                <RankComponent active={USER_RANKS.indexOf(userRank) >= USER_RANKS.indexOf("resident")} rank="resident" onClick={() => setResidentModalOpen(true)} />
            </div>

            <ModalExpert open={isExpertModalOpen} onClose={handleCloseExpertModal} />
            <ModalAdvizer open={isAdvizerModalOpen} onClose={handleCloseAdvizerModal} />
            <ModalAmbassador open={isAmbassadorModalOpen} onClose={handleCloseAmbassadorModal} />
            <ModalHeadliner open={isHeadlinerModalOpen} onClose={handleCloseHeadlinerModal} />
            <ModalResident open={isResidentModalOpen} onClose={handleCloseResidentModal} />
        </div>
    )
}
