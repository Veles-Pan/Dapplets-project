import {useEffect, useState} from 'react'
import axios from 'axios'
import {ITag} from '../components/ui/ui-itemList/types'

const API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1'

export default function useTags() {
    const [tags, setTags] = useState<{[id: string]: string}>({})

    useEffect(() => {
        function fetchTags() {
            axios
                .get<{data: ITag[]}>(`${API_URL}/tags`)
                .then(response => {
                    const tegsResult = response.data.data.reduce(
                        (acc: {[id: string]: string}, item: ITag) => {
                            return {
                                ...acc,
                                [item.id]: item.name,
                            }
                        },
                        {}
                    )
                    setTags(tegsResult)
                })
                .catch(e => {
                    console.log(e)
                    fetchTags()
                })
        }

        fetchTags()
    }, [])

    return tags
}
