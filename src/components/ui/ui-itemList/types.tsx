export interface IItem {
    author: string
    description: string
    icon: string
    id: string
    title: string
    tags: Array<string>
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
}

export interface ITag {
    id: string
    name: string
}

export interface IResponce {
    data: IItem
    total: number
}
