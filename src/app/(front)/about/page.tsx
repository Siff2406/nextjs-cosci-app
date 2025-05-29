import Contact01Page from "@/components/contact-01/contact-01";

export default async function About() {
    const data = await fetch('https://api.codingthailand.com/api/version', { next: {revalidate: 3600}})
    const apiInfo = await data.json()
    return (
        <div>
            <Contact01Page version={apiInfo.data.version} />
            <p style={{ textAlign: 'right', marginRight:'1rem' }}> { apiInfo && apiInfo.data.version }</p>
        </div>
    )
}