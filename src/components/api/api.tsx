import axios from 'axios'
import {IItem} from '../ui/ui-itemList/types'

const API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1'
const DAPPLETS = '/dapplets'
const LIMIT = 10

export default function fetchApi({
    search,
    start,
    theme,
    order,
    isScrolled,
    changeResultLoading,
    filterSearchResult,
    createListItems,
    setIsScrolled,
    stopLoader,
    items,
}: {
    search: string
    theme: string
    order: string
    isScrolled: boolean
    start: number
    changeResultLoading: (result: boolean) => void
    filterSearchResult: (data: IItem[], total: number) => IItem[]
    createListItems: (items: IItem[], isUpdate: boolean) => void
    setIsScrolled: (result: boolean) => void
    stopLoader: (length: number, total: number) => void
    items: IItem[]
}) {
    axios
        .get<{data: IItem[]; total: number}>(`${API_URL}${DAPPLETS}`, {
            params: {
                filter: search
                    ? JSON.stringify([{property: 'title', value: search}])
                    : undefined,
                start,
                limit: LIMIT,
                sort:
                    order && theme
                        ? JSON.stringify([
                              {
                                  property: theme,
                                  direction: order,
                              },
                          ])
                        : undefined,
            },
        })
        .then(response => {
            changeResultLoading(false)
            let totalItems: number = response.data.total

            if (isScrolled) {
                if (search) {
                    const filteredItems = filterSearchResult(
                        response.data.data,
                        totalItems
                    )
                    createListItems(filteredItems, false)
                } else {
                    createListItems(response.data.data, false)
                }

                setIsScrolled(false)
            } else {
                if (search) {
                    createListItems(
                        filterSearchResult(response.data.data, totalItems),
                        true
                    )
                } else {
                    createListItems(response.data.data, true)
                }
            }

            stopLoader(items.length, totalItems)
        })
        .catch(e => {
            console.log('error' + e)
            fetchApi({
                search,
                start,
                theme,
                order,
                isScrolled,
                changeResultLoading,
                filterSearchResult,
                createListItems,
                setIsScrolled,
                stopLoader,
                items,
            })
        })
}
