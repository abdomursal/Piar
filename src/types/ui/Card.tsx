import { stationEntitesProps } from "../../store/stationReducer";
import { userEntitesProps } from "../../store/userReducer";

export type CardProps={
    onClick?:()=>void;
    typeCard?:string
    items?: userEntitesProps|stationEntitesProps

}