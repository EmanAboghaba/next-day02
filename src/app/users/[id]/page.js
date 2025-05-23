export async function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
    description: "Details for user",
  };
}

export default function UserPage({ params }) {
  return <div>User ID: {params.id}</div>;
}
