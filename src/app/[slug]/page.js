// src/app/[slug]/page.js
export default async function Page({ params }) {
    const  slug2  = params.slug; // Await the params object
    return <div>It is {slug2}</div>;
}