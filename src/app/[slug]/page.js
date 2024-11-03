// src/app/[slug]/page.js
export default async function Page({ params }) {
    const  {slug}  = params; // Await the params object
    return <div>It is {slug}</div>;
}