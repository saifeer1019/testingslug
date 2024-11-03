// src/app/[slug]/page.js
export default async function Page({ params }) {
    const { slug } = params.slug; // Await the params object
    return <div>{slug}</div>;
}