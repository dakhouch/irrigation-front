import { Avatar, Tag } from 'antd';


export const PUIT_COLUMNS = () => {
   return [
       {
           Header: 'Date ',
           accessor: 'date',
           show: true,
       }
       ,
       {
      Header: "Volume d'eau",
      accessor: 'water_volume',
      show: true,
      },

  ];
};
export const PUIT_DASHBOARD_COLUMNS = () => {
    return [
        {
            Header: 'Nom ',
            accessor: 'name',
            show: true,
        }
        ,
        {
            Header: "Volume d'eau (m3)",
            accessor: "water_volume",
            show: true,
        },
        {
            Header: "débit (m3/h)",
            accessor: "debit",
            show: true,
        },
        {
            Header: "Etat",
            accessor: "state",
            Cell: (e)=>(<RenderStatus value={e.value}  trueValue={"Marche"} falseValue={"Arret"} />),
            show: true,
        },
    ];
};

export const SECTEUR_DASHBOARD_COLUMNS = () => {
    return [
        {
            Header: 'Secteur ',
            accessor: 'name',
            show: true,
        }
        ,
        {
            Header: "Besoin d'eau (m3)",
            accessor: "water_requirement",
            show: true,
        },
        {
            Header: "Volume d'eau (m3)",
            accessor: "water_volume",
            show: true,
        },
        {
            Header: "Pression avant filtre (bar)",
            accessor: "pression_BF",
            show: true,
        },
        {
            Header: "Pression après filtre (bar)",
            accessor: "pression_AF",
            show: true,
        },
        {
            Header: "Durée d'irrigation (H min sec)",
            accessor: 'irrigation_duration',
            show: true,
        },
        {
            Header: "Durée de fertigation (H min sec)",
            accessor: 'fertigation_duration',
            show: true,
        },
        {
            Header: 'Surface (Ha)',
            accessor: 'surface',
            show: true,
        }

    ];
};


export const COURANT_DASHBOARD_COLUMNS = () => {
    return [
        {
            Header: 'Phase ',
            accessor: 'phase',
            show: true,
        }
        ,
        {
            Header: "Courant",
            accessor: "courant",
            show: true,
        },
    ];
};



const RenderStatus = ({ value, trueValue, falseValue }) => (
  <Tag color={value ? 'success' : 'error'}>
    {value ? trueValue : falseValue}
  </Tag>
);
const RenderAvatar = ({ value }) => (
  <div className="flex h-16 items-center">
    <Avatar src={value} />
  </div>
);
const RenderJoinList = ({ value }) => (<span>{value.join('  ')}</span>)
