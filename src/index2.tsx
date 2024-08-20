import React, { useEffect, useState, FC } from 'react'
import { requestUsers, requestUsersWithError, User } from './api'

export const Index2: FC = () => {
    const [users, setusers] = useState<User[]>([])
    const [Limit, setLimit] = useState<any>(4)
    const [list, setlist] = useState(1)
    const [found, setfound] = useState(true)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(true)
    const [namevalue, setname] = useState("")
    const [agevalue, setage] = useState("")

    useEffect(() => {
        setloading(true)
        setfound(true)
        seterror(false)
        fetch()
            .finally(() => setloading(false))
    }, [Limit, namevalue, agevalue, list])

    const fetch = async () => {
        try {
            const data = await requestUsers({ name: namevalue, age: agevalue, limit: Limit, offset: ((list - 1) * Limit) })
            if (data.length > 0) {
                setusers(data)
            }
            else {
                setfound(false)
            }

        }
        catch {
            seterror(true)
            requestUsersWithError({ name: namevalue, age: agevalue, limit: Limit, offset: ((list - 1) * Limit) }).catch(
                console.error
            );
        }
    }

    const searchname = (event: { target: { value: React.SetStateAction<string> } }) => {
        setname(event.target.value)
    }
    const searchage = (event: { target: { value: React.SetStateAction<string> } }) => {
        setage(event.target.value)
    }
    const changelimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(event.target.value)
    }
    const Nextchange = () => {
        setlist(prev => prev + 1)
    }
    const Prevchange = () => {
        setlist(prev => prev - 1)
    }
    return (
        error ? (<div>Error: 500, unknown server error</div>) :
            found ? (
                loading ? (<div>Loading...</div>) : (
                    <div style={{ border: 'solid black 2px', width: "400px", borderRadius: '4px', padding: '5px' }}>
                        <div >
                            <input style={{ marginRight: '3px' }} value={namevalue} onChange={searchname} placeholder='Name' />
                            <input style={{ marginLeft: '3px' }} value={agevalue} onChange={searchage} placeholder='Age' />
                        </div>
                        <ul style={{ padding: 0 }}>
                            {users.map((obj, index) => (
                                <div key={index} >{obj.name}, {obj.age}</div>
                            ))}
                        </ul>
                        <div style={{ width: '100%' }}>
                            By page:
                            <select value={Limit} onChange={changelimit} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <button onClick={Prevchange} disabled={list === 1}>prev</button>
                            page: {list}
                            <button onClick={Nextchange} disabled={users.length < Limit}>next</button>
                        </div>
                    </div>
                )
            ) : (<div>Users not found</div>)
    )
}