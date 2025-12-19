import { IconName } from "../foundation/Icon"


export type NavigationItem = {
    label: string
    icon?: IconName
    
    path: string
    newTab?: boolean

    isActive?: boolean
    isDisabled?: boolean
}