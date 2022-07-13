import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface SymptomsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    link: string,
    text: string,
    index: number
}