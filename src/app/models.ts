interface Client{
    id:number,
    firstName:string,
    lastName:string,
    address:string,
    phoneNumber:string
}

interface Task{
    id:number,
    taskName:string,
    description:string,
    clientAddress:string,
    startTime:string,
    endTime:string,
    clientId:number
}
