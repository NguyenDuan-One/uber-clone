import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";
const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'primary':
            return 'bg-primary-500';
        case 'secondary':
            return 'bg-secondary-500';

        case 'success':
            return 'bg-success-500';
        case 'danger':
            return 'bg-danger-500';
        default:
            return 'bg-[#0286ff]';
    }
}

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return "text-black";
        case "secondary":
            return "text-gray-100";
        case "danger":
            return "text-red-100";
        case "success":
            return "text-green-100";
        default:
            return "text-white";
    }
};

const CustomerButton = ({ onPress,
    title,
    bgVariant = "primary",
    textVariant = "primary",
    IconLeft,
    IconRight,
    className,
    ...props }:ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}
            className={`w-full my-3 rounded-full flex flex-row justify-center items-center shadow-md shaodw-neutaral-400/10 bg-${bgVariant} ${getBgVariantStyle}  ${className}`} {...props}>
            {
                IconLeft && <IconLeft />
            }
            <Text className={`font-JakartaBold text-lg text-center text-white mx-10 my-2 ${bgVariant} ${getTextVariantStyle}`}>{title}</Text>
            {
                IconRight && <IconRight />
            }
        </TouchableOpacity>
    );
}

export default CustomerButton;