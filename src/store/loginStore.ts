import {computed, makeObservable, observable, toJS, action, override} from "mobx";

import React from "react";

class LoginStore{
    token: string | null = ""

    constructor(){
        makeObservable(this,{
            token: observable,
            getToken: computed,
            setToken: action
        })
    }

    get getToken(){
        const data = localStorage.getItem("token")

        if(data){
            return toJS(data)
        }

        return toJS(undefined)
    }

    setToken(){
        localStorage.setItem("token", JSON.stringify("123"))
    }
   

}

const loginStore = new LoginStore();

const loginContext = React.createContext(loginStore);
const useLogin = () => React.useContext(loginContext);

export {loginStore, loginContext, useLogin}