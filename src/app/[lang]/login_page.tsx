"use client";

import { Suspense, useState, useEffect } from "react";
import DataImage from "./data_image";
import DictionaryGreeting from "./dictionary_greeting";
import { useRouter } from "next/navigation";
import { DASHBOARD } from "@/src/shared/constants/route_constant";
import { useDialog } from "@/src/shared/component/dialog/providers";

export default function LoginPage() {
  const { open,isClosed, openDialog } = useDialog()
  const router = useRouter();
  const [tableData, setTableData] = useState<Promise<string>>();
  // const [imageUrl, setImageUrl] = useState<string>("");

  // useEffect(() => {
  //   async function fetchDogImage() {
  //     const res = await fetch("https://dog.ceo/api/breeds/image/random");
  //     const json = await res.json();
  //     setImageUrl(json.message);
  //   }
  //   fetchDogImage();
  // }, []);

  // Add a submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement)?.value || '';
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value || '';
    
  
    // Simple validation
    if (!username) {
      window.alert("Please enter your username.");
      return;
    }
    if (!password) {
      window.alert("Please enter your password.");
      return;
    }
    // Check credentials
    
    if (username === "admin" && password === "123456") {
      openDialog()
      console.log("Login successful!" + open);
      // window.alert("Login successful!"+ open);
    } else {
      window.alert("Invalid username or password.");
    }
  }

  //   useCallback(() => {
  //     e.preventDefault();
  //     const form = e.currentTarget;   })
  // };
  
 async function fetchDogImage() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      // setImageUrl(json.message);
      return json.message;
  }

  console.log("Open dialog state:", isClosed);
  
  
  useEffect(() => {
    // This effect runs once when the component mounts
    const imageUrl = fetchDogImage();
    setTableData(imageUrl)
    
  }, [openDialog])


  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: '#fdd9c6' }}>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        {tableData && (
          <Suspense fallback={<div style={{ width: '200px', height: '200px' }}>Loading...</div> }>
            <DataImage imageUrl={tableData}/>
          </Suspense>
        )}
        
        
        
        <Suspense fallback={<div>Loading...</div> }>
          <DictionaryGreeting />
        </Suspense>
         
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              style={{ color: "black" }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={{ color: "black" }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 text-base font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Dont have an account?
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}


// async function DictionaryGreeting({ lang }: { lang: 'en' | 'th' }) {
  
//   const dict = await getDictionary(lang)
//   // const dictionary = use(lang); 
//   return <h2 className="text-2xl font-bold mb-6 text-center">Login {dict.welcome}</h2>;
// }
