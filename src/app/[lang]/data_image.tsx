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
    
    return (
        <div className="flex flex-col items-center justify-center" >
            <div style={{ width: '200px', height: '200px' }}>
                {data != "" && (
                    <Image
                        src={data}
                        width={200}
                        height={200}
                        priority={true}
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        alt={stringAlt}
                        onError={(e) => {
                            console.error("Image failed to load:", e);
                        }}
                    />
                )}
            </div>
           
        </div>
    );

}

