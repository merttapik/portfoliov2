import { Service } from "../typings";

export const fetchServices=async () => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getServices`);
    const data = await res.json()
    const services: Service[]= data.services;

    //console.log("fetching", services);

    return services;
    
}