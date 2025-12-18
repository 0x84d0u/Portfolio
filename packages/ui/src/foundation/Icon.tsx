import * as Lucide from "lucide-react";

export type IconName = keyof typeof Lucide;
export type IconProps = Lucide.LucideProps & {
    name: IconName,
}

export const Icon = ({
    name,
    ...rest
}: IconProps) => {

    const IconComponent = Lucide[name] as Lucide.LucideIcon;

    return <span>
        <IconComponent name={name} {...rest} />
    </span>
};
