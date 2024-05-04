import { ReactNode } from "react"

 export type ButtonsType = {
    children: string,
    bgColor?: ButtonVariantType,
    icon?: ReactNode,
    size: ButtonSizeType,
}

export type ButtonVariantType = "primary" | "secondary" | "success" | "danger" | "warning";
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';