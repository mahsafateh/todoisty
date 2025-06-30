export type Item = {
    item: string
    // isCompolited?: boolean
}

export type Props = { 
    todoItem: string
    index: number
};

export type BtnProps = {
    onPress: () => void
    title: string,
}