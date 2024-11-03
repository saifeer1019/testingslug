// src/app/[slug]/page.js

 // Add this line to ensure dynamic routing works

export default function Page({ params }) {
    return (
        <div className="p-4">
            Current slug: {params.slug}
        </div>
    )
}