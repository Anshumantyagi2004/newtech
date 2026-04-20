import React from 'react'
import Category from './Category'
import { categories } from '@/data/data';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = categories.find((p) => p.id === id);
    if (!product) {
        return {
            title: "Advertising LED Display Manufacturer| Newtech Video Systems",
            description: "Newtech Video Systems Pvt. Ltd. is a leading manufacturer of advertising LED displays, outdoor LED screens, commercial LED video walls & industrial LED display systems for high-impact visual communication solutions.",
        };
    }

    return {
        title: product.metaTitle || product.name,
        description: product.metaDescription || product.description,
    };
}

export default function page() {
    return (
        <Category />
    )
}