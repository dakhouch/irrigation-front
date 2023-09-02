import Table from "../../components/table/Table.jsx";
import { useGetPuitsOnRealTime} from "../../api/puit/caller.js";
import {useGetSecteursOnRealTime} from "../../api/secteur/caller.js";
import {useMemo} from "react";
import {
    COURANT_DASHBOARD_COLUMNS,
    PUIT_DASHBOARD_COLUMNS,
    SECTEUR_DASHBOARD_COLUMNS
} from "../../holders/table/tableColumns.jsx";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import state from "../../assets/images/state.png"
import synch from "../../assets/images/synch.png"
import logo from "../../assets/logo/irrigationLogo.png";
import {useGetStateOnRealTime} from "../../api/state/caller.js";
import EmptyResult from "../../components/utils/EmptyResult.jsx";
import EmptyWellResult from "../../components/utils/EmptyWellResult.jsx";
import {Spin, Tag} from "antd";
import {useGetCourantOnRealTime} from "../../api/courant/caller.js";

const Dashboard=()=>{
   const SECTEUR_COLUMNS=useMemo(SECTEUR_DASHBOARD_COLUMNS,[]);
   const PUIT_COLUMNS=useMemo(PUIT_DASHBOARD_COLUMNS,[]);
   const COURANT_COLUMNS=useMemo(COURANT_DASHBOARD_COLUMNS,[]);
   const {
      data: puitData = [],
      isFetching: isLoadingPuitData,
      isError: isErrorPuitData,
      isSuccess: isSuccessPuitData,
   } = useGetPuitsOnRealTime();
   const courantQuery=useGetCourantOnRealTime()
   const {
      data: secteurdata = [],
      isFetching: isLoadingSecteurData,
      isError: isErrorSecteurData,
      isSuccess: isSuccessSecteurData,
   } = useGetSecteursOnRealTime();
    const {
        data: stateData = {connected:"",last_update:""},
        isFetching: isLoadingStateData,
        isError: isErrorStateData,
        isSuccess: isSuccessStateData,
        isFetched: isFetchedStateData,
        error:errorStateData,
    } = useGetStateOnRealTime();
return(
    <div className="w-full items-center bg-cover bg-center "  >
       <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-between px-10 py-6">
           <div className="w-full flex flex-row justify-center">
               <img className="h-32"  src={logo} />
               <Card color="transparent" className="w-fit shadow-none">
                   <CardBody className="h-full flex justify-center items-center ">
                       <PageResult
                           isLoadingData={isLoadingStateData}
                           isSuccessData={isSuccessStateData}
                           isErrorData={isErrorStateData}
                           isFetchedData={isFetchedStateData}
                           errorData={errorStateData}
                           data={stateData}/>
                   </CardBody>
               </Card>
           </div>
           <div className="w-full h-fill bg-white flex-row mx-8 p-3 rounded-lg shadow-md">
               <Table
                   isLoading={courantQuery.isFetching}
                   isError={courantQuery.isError}
                   isSuccess={courantQuery.isSuccess}
                   columns={COURANT_COLUMNS}
                   rows={courantQuery.data}
                   emptyDataPrimaryMessage={'Aucun information trouvé !'}
                   emptyDataSecondaryMessage={''}
                   disablePagination={true}
               />
           </div>
             <div className="w-full h-fill bg-white flex-row mx-8 p-3 rounded-lg shadow-md">
                <Table
                    isLoading={isLoadingPuitData}
                    isError={isErrorPuitData}
                    isSuccess={isSuccessPuitData}
                    columns={PUIT_COLUMNS}
                    rows={puitData}
                    emptyDataPrimaryMessage={'Aucun Puit trouvé !'}
                    emptyDataSecondaryMessage={''}
                    disablePagination={true}
                />
             </div>
   <div className="w-full h-fill bg-white p-3 flex-row mx-auto rounded-lg shadow-md">
      <Table
          isLoading={isLoadingSecteurData}
          isError={isErrorSecteurData}
          isSuccess={isSuccessSecteurData}
          columns={SECTEUR_COLUMNS}
          rows={secteurdata}
          emptyDataPrimaryMessage={'Aucun Information trouvé !'}
          emptyDataSecondaryMessage={''}
          disablePagination={true}
      />
   </div>
       </div>
    </div>
)
}

const PageResult = ({ isLoadingData, isFetchedData, isSuccessData, isErrorData, errorData,data }) => {
    const connected=()=> (
        <Tag color={data.connected ? 'success' : 'error'}>{data.connected ?  "Connected" : "Disconnected"}</Tag>
       )
    if (isLoadingData) return (<div className="flex justify-center items-center">
        <Spin size="large" />
    </div>)
    if (isFetchedData) {
        if (isSuccessData) return (
            <ul className="flex flex-row">
                <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                   <img
                       src={state}
                       alt="state"
                       className="w-6"
                   />
                          </span>
                    <Typography className="font-bold">
                        {connected()}
                      </Typography>
                </li>
                <li className="flex items-center gap-4">
                          <span className="rounded-full border border-white/20 bg-white/20 p-1">
                              <img
                                  src={synch}
                                  alt="plc"
                                  className="w-6"
                              />
                          </span>
                    <Typography className="font-bold">{data.last_update}</Typography>
                </li>
            </ul>
        )
        else{
            return (
                <div className="w-full mx-auto bg-white rounded-lg shadow-md   ">
                    <EmptyResult
                        size={'150px'}
                        mainMessage={
                            errorData.response
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


export default Dashboard;