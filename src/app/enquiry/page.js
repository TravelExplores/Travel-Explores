import EnquiryForm from "../../../components/Form";

export default async function EnquiryPage({ searchParams }) {
  const params = await searchParams;
  return <EnquiryForm city={params?.city || ""} />;
}
