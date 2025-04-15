import { TouchableOpacity } from "react-native";

const CustomerButton = ({ onPress,
    title,
    bgVariant="primary",
    textVariant="primary",
    iconLeft,
    iconRight,
    classNamw,
    ...props }) => {
    return (
        <TouchableOpacity onPress={() => console.log("Customer Button Pressed")}>

        </TouchableOpacity>
    );
}