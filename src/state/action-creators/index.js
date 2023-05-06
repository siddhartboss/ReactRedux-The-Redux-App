export const addMoney = (amount) => {
    return (dispath) => {
        dispath({
            type:"deposite",
            payload: amount
        })
    }
}

export const removeMoney = (amount) => {
    return (dispath) => {
        dispath({
            type:"withdraw",
            payload: amount
        })
    } 
}