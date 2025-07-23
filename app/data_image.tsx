"use client";
import { use, useEffect, useState } from "react";
import Image from 'next/image'
 

export default function DataImage({
    imageUrl
}: {
    imageUrl: Promise<string>;
}) {
    const [data, setData] = useState<string>("");

    const url = use(imageUrl)
    useEffect(() => {          
        setData(url)
     }, [url])

    
    const stringAlt = `Picture of the author ${data}`;
    console.log("Image URL222:"+stringAlt);
    return (
        <div>
               {data != "" && <Image
            src={data}
            width={500}
            priority={true}
            height={500}
            alt={stringAlt}
            onError={(e) => {
                console.error("Image failed to load:", e);
            }}
            />} 
        </div>
    );

}

