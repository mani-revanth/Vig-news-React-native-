import axios from "axios";
const ApiStack={
    sendOtp: async (Number)=>{
        return new Promise((resolver,reject)=>{
            axios
            .post(
                'https://www.getapistack.com/api/v1/otp/send',
                {
                    phoneNumber:Number,
                    messageFormat:'please use this ${otp} as your vig news otp',
                },
                {
                    headers:{
                        'x-as-apikey' : 'f65f49c1-e43f-4144-ab23-93743c0ddb64',
                        'Content-Type':'application/json',
                    }
                },
            )
            .then((resp)=>resp.data)
            .then((resp)=>{
                resolver(resp.data.requestId);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    },
    verifyOtp:async (Id,Otp)=>{
        return new Promise((resolver,reject)=>{
            axios
            .post(
                'https://www.getapistack.com/api/v1/otp/verify',
                {
                    requestId:Id,
                    otp:Otp,
                },
                {
                    headers:{
                        'x-as-apikey' : 'f65f49c1-e43f-4144-ab23-93743c0ddb64',
                        'Content-Type':'application/json',
                    }
                },
            )
            .then((resp)=>resp.data)
            .then((resp)=>{
                resolver(resp.data.isOtpValid);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    },
}
export default ApiStack;