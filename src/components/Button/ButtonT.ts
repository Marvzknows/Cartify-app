import { ReactNode } from "react"

 export type ButtonsType = {
    children: string | ReactNode,
    bgColor?: ButtonVariantType,
    icon?: ReactNode,
    size: ButtonSizeType,
    disabled: boolean
}

export type ButtonVariantType = "primary" | "secondary" | "success" | "danger" | "warning";
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';