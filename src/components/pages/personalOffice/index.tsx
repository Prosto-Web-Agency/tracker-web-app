import PersonField from "@/components/common/fields/officeField/PersonField";
import ImagePicker from "@/components/pages/imagePicker";

export default function PersonalOffice() {
    return (

        <section className="min-h-screen h-screen w-full overflow-hidden">
            <div className="min-h-full w-full bg-bg-gray  rounded-t-9 s_lg: p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

                <PersonField />
            </div>
        </section>
    )
}