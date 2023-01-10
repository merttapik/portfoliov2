import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project, Service } from "../../typings";

const query= groq`
    *[_type=="service"]{
        ...,
        technologies[]->
    }
`
type Data={
    services: Service[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const services:Service[]= await sanityClient.fetch(query);

    res.status(200).json({ services })
  }