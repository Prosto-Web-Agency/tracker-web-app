import AchievmentCard from "../cards/AchievmentCard";

export default function AchievmentField() {
    return (
        <div className="w-[282px] lg:w-full h-[300px] bg-white overflow-hidden bg-orange-class">
            <h3 className="text-heading-s mt-3 ml-4 text-white s_lg:text-heading-ss-bold pb-2">
                Ачивки
            </h3>

            <div className="w-full pl-4 h-full gap-2 overflow-x-scroll flex scroll-hidden">
                <AchievmentCard image="f" name="Иван Иванович" achieveName="Новое достижение"/>
                <AchievmentCard image="f" name="Иван Иванович" achieveName="Новое достижение"/>
                <AchievmentCard image="f" name="Иван Иванович" achieveName="Новое достижение"/>
                <AchievmentCard image="f" name="Иван Иванович" achieveName="Новое достижение"/>
            </div>
        </div>
    )
}