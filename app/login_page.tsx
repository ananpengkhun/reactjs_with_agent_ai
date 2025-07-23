"use client";

// import { useRouter } from "next/navigation";
import { Suspense, useCallback } from "react";
import DataImage from "./data_image";

export default function LoginPage() {
  // const router = useRouter();
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
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // e.preventDefault();
  //   // const form = e.currentTarget;
  //   // const username = (form.elements.namedItem('username') as HTMLInputElement)?.value || '';
  //   // const password = (form.elements.namedItem('password') as HTMLInputElement)?.value || '';

  //   // // Simple validation
  //   // if (!username) {
  //   //   window.alert("Please enter your username.");
  //   //   return;
  //   // }
  //   // if (!password) {
  //   //   window.alert("Please enter your password.");
  //   //   return;
  //   // }
  //   // // Check credentials
  //   // if (username === "admin" && password === "123456") {
  //   //   window.alert("Login successful!");
  //   //   // router.push("/dashboard"); // Change '/dashboard' to your target route
  //   // } else {
  //   //   window.alert("Invalid username or password.");
  //   // }

  //   useCallback(() => {
  //     e.preventDefault();
  //     const form = e.currentTarget;   })
  // };

  console.log("Image URL:starttt");
 async function fetchDogImage() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      // setImageUrl(json.message);
      return json.message;
  }

  const imageUrl = fetchDogImage();
  console.log("Image URL:xxxxxx");
  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: '#fdd9c6' }}>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        

        <Suspense fallback={<div>Loading...</div> }>
          <DataImage imageUrl={imageUrl}/>
        </Suspense>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" >
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
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

