// src/app/[slug]/page.js
export default function Page({ params }) {
    const { slug } = params.slug; // Await the params object
    return <div>{slug}</div>;
}