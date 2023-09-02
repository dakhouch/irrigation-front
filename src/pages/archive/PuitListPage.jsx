import PuitFilterCard from "../../components/filterCards/PuitFilterCard.jsx";
import {useForm} from "react-hook-form";
import {useGetFilteredPuits} from "../../api/puit/caller.js";
import {PUIT_COLUMNS} from "../../holders/table/tableColumns.jsx";
import {useEffect, useMemo, useState} from "react";
import Table from "../../components/table/Table.jsx";
import {ExportToExcel} from "../../components/inputs/button/ExportExcelButton.jsx";
import EmptyResult from "../../components/utils/EmptyResult.jsx";
import EmptyWellResult from "../../components/utils/EmptyWellResult.jsx";
import {MagnifyingGlass} from "react-loader-spinner";

const PuitListPage=()=>{
    const [params,setParams] = useState({name:'',startDate:'',endDate:''});
    const [enabled, setEnabled] = useState(false);
    const columns = useMemo(() => PUIT_COLUMNS(), []);
    const {
        data: data = [],
        isFetching: isLoadingData,
        isError: isErrorData,
        isSuccess: isSuccessData,
        isFetched: isFetchedData,
        error:errorData,
        refetch:getData,
    } = useGetFilteredPuits(params.name,params.startDate,params.endDate,enabled);
    const {register, control, watch,handleSubmit}=useForm();
    const onSearchClick = async (data) => {
        if( data.name && data.startDate && data.endDate && data.name.trim().length > 0){
        setParams(data);
            if (!enabled) setEnabled(true);
            await getData();

    }
    }
    // const onSearchChange = (key,e) => {
    //     setParams({...params,[key]:e.target.value});
    //     if (e.target.value.length === 0) {
    //         setEnabled(false);
    //         clearData();
    //     }
    // };
    return(
        <div className="w-full items-center">
        <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-between px-10">
        <div className="w-full p-4">
        <PuitFilterCard register={register} control={control} watch={watch} isLoading={isLoadingData} onClick={handleSubmit(onSearchClick)}/>
        </div>
        <PageResult
                     isLoadingData={isLoadingData}
                     isFetchedData={isFetchedData}
                     isSuccessData={isSuccessData}
                     isErrorData={isErrorData}
                     errorData={errorData}
                     columns={columns}
                     data={data}/>
        </div>
        </div>
)
}
const PageResult = ({ isLoadingData, isFetchedData, isSuccessData, isErrorData, errorData, columns, data }) => {
    const [exportedData,setExportedData]=useState({});
    useEffect(()=>{
        if(isFetchedData){
         const dataToExport=data.map(item=>({"date":item?.date ,"volume d'eau":item?.water_volume}));
            setExportedData(dataToExport);
        }
    },[isFetchedData])
    if (isLoadingData) return (<div className="w-full h-screen flex justify-center p-12">
        <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#A3C68C'
        />
    </div>)
    if (isFetchedData) {
        if (isSuccessData) return (
            <div className="w-full h-fill bg-white flex-row mx-auto px-8 sm:px-6 lg:px-8 rounded-lg shadow-md">
                <div className="p-4 text-end">
                    <ExportToExcel apiData={exportedData} fileName={"PUIT"} sheetName={data[0].name}/>
                </div>
                <Table
                    isLoading={isLoadingData}
                    isError={isErrorData}
                    isSuccess={isSuccessData}
                    columns={columns}
                    rows={data}
                    emptyDataPrimaryMessage={'Aucun Puit trouvé !'}
                    emptyDataSecondaryMessage={''}
                />
            </div>
        )
        else{
            return (
                <div className="w-full mx-auto bg-white rounded-lg shadow-md   ">
                    <EmptyResult
                        size={'150px'}
                        mainMessage={
                            errorData?.response
                        }
                    />
                </div>)
        }
    }
    return (
        <div className="w-full mx-auto">
            <EmptyWellResult mainMessage={"CHERCHER L'ARCHIVE DES PUITS"} className="w-1/2 py-6"/>
        </div>
    )
}


export default PuitListPage;