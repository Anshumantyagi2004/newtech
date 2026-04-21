import { serviceLocations } from "@/data/data";
import { notFound } from "next/navigation";
import Location from "./Location";

export async function generateMetadata({ params }) {
    const { locations } = await params;

    const rawCity = locations.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Advertising LED Display in ${cityName} | Newtech Video Systems Pvt Ltd`,
        description: `Get high-quality Advertising LED Display in ${cityName} with Newtech Video Systems Pvt Ltd. We offer indoor & outdoor LED display solutions with installation and support. Contact us today!`,
    };
}

const Page = async ({ params }) => {
    const { locations } = await params;
    const validCity = serviceLocations.find(
        (c) => c.href.replace("/", "") === locations
    );

    if (!validCity) {
        notFound();
    }

    return <Location location={locations} />;
};

export default Page;