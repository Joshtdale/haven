import { getPage } from "../../app/queries";

type Props = {
    params: { slug: string };
};

export default async function page({ params }: Props) {
    const slug = params.slug;
    const page = await getPage(slug);
    return <div>{page.name}</div>
}