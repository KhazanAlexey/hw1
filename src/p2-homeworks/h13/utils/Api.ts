import axios from "axios";

const  instance=axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth",
    responseType: "json"
});

// test, body: {success: true},

export const api={
    postTest(data:boolean){
    return    instance.post("/test",{success: data})
    },
    getTest(){
        return    instance.get("/test")
    }

}
