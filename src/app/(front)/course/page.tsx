import Features05Page from "@/components/features-05/features-05";

export default async function Course() {
    const data = await fetch('https://api.codingthailand.com/api/course', {cache: 'no-cache'});
    const coureses = await data.json()
  return (
    <>
      {
      coureses && <Features05Page courses={coureses.data} />
      }
      </>
  );
}