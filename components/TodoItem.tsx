import { Props } from "@/types/todo"
import { View, Text } from "react-native"


export default function TodoItem({todoItem, index} : Props) {
    return (
        <View
            className="p-1 m-1 "
        >
            <Text
                className="font-mono text-[16px] font-semibold"
            >
             {`${index +1}.`} {todoItem}
            </Text>
        </View>
    )
}