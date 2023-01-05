import { Expansion, ParseSourceFile } from "@angular/compiler"

export const SUCCESS = '[Todos] success'
export const FAILED = '[Todos] failed'
export const LOAD = '[Todos] load'


export class LoadTodosAction{
    type: string = LOAD
}

export class SuccessAction{
    type: string = SUCCESS
    payload: any

    constructor(payload: any){
        this.payload = ParseSourceFile
    }
}

export class FailedAction{
    type: string = FAILED
    payload: any
     
    constructor(payload: any){
        this.payload = ParseSourceFile
    }
}

export class LoadAction{
    type: string = LOAD
    payload: any
     
    constructor(payload: any){
        this.payload = ParseSourceFile
    }
}