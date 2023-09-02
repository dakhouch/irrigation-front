import SelectorInput from "../inputs/SelectorInput.jsx";
import {Button} from "antd";
import DateInput from "../inputs/DateInput.jsx";
import moment from "moment";
import {SearchOutlined} from "@ant-design/icons";

const PuitFilterCard=({register, control, onClick, watch,isLoading})=>{
    const dateDebut = watch('startDate');
    const dateFin = watch('endDate');
    const disabledDateFin = (current) => {
        return current && current < moment(dateDebut, 'DD-MM-YYYYTHH:mm:ss.SSS[Z]');
    };
    const disabledDateDebut = (current) => {
        return current && current > moment(dateFin, 'DD-MM-YYYYTHH:mm:ss.SSS[Z]');
    };
    const puitOptions=[
        {key:'Puit 3',value:'Puit 3'},
        {key:'Puit 6',value:'Puit 6'},
        {key:'Puit 7',value:'Puit 7'},
        {key:'Puit 8',value:'Puit 8'}
    ]
    return (
        <div className="w-full h-fill flex-row mx-auto mt-8">
        <div className="w-full mx-auto bg-white rounded-lg shadow-md px-4 ">
            <div className="flex items-center gap-12 p-6">
                <SelectorInput
                    placeholder="SELECTIONNER UN PUIT"
                    label="PUIT"
                    options={puitOptions}
                    name="name"
                    control={control}
                />
                <DateInput
                    isRequired={false}
                    label="Date debut"
                    name="startDate"
                    placeholder="Date supérieure à ..."
                    type="text"
                    control={control}
                    disabledDate={disabledDateDebut}
                    showTime={false}
                />
                <DateInput
                    isRequired={false}
                    label="Date fin"
                    name="endDate"
                    placeholder="Date inférieure à ..."
                    type="text"
                    control={control}
                    disabledDate={disabledDateFin}
                    showTime={false}
                />
                <div className="flex flex-col space-y-2 px-4 py-1 w-full">
                <Button className="bg-primary " icon={<SearchOutlined />} loading={isLoading} onClick={onClick}  >
                    Chercher
                </Button>
                </div>
            </div>
        </div>
    </div>)

}

export default PuitFilterCard;