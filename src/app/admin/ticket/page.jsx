"use client";

import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [tickets, setTickets] = useState([]);

    const [loading, setLoading] = useState(true);

    // FETCH TICKETS
    const fetchTickets = async () => {
        try {
            const response = await fetch("/api/support");

            const data = await response.json();

            setTickets(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex text-black">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 p-4 md:p-8 overflow-x-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">
                        Support Tickets
                    </h1>

                    <div className="bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
                        Total Tickets: {tickets.length}
                    </div>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : tickets.length === 0 ? (
                    <div className="bg-white rounded-2xl p-10 text-center shadow">
                        No support tickets found.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {tickets.map((ticket) => (
                            <div key={ticket._id}
                                className="bg-white rounded-2xl shadow border border-gray-200 p-4 hover:shadow-lg transition"
                            >
                                <div className="flex flex-col lg:flex-row gap-4">
                                    {/* IMAGE */}
                                    <div className="w-full lg:w-40 flex-shrink-0">
                                        {ticket.file ? (
                                            <img
                                                src={ticket.file}
                                                alt="Support"
                                                className="w-full h-32 object-cover rounded-xl"
                                            />
                                        ) : (
                                            <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    {/* DETAILS */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                                            <div>
                                                <h2 className="text-xl font-bold">
                                                    {ticket.companyName}
                                                </h2>

                                                <p className="text-sm text-gray-500">
                                                    {ticket.ticketId}
                                                </p>
                                            </div>

                                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm w-fit">
                                                {ticket.status}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                                            <p>
                                                <span className="font-semibold">
                                                    Contact:
                                                </span>{" "}
                                                {ticket.contactPerson}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Location:
                                                </span>{" "}
                                                {ticket.projectLocation}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Serial No:
                                                </span>{" "}
                                                {ticket.productSerialNo}
                                            </p>

                                            <p>
                                                <span className="font-semibold">
                                                    Date:
                                                </span>{" "}
                                                {new Date(
                                                    ticket.createdAt
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-700 line-clamp-3">
                                            {ticket.problemDescription}
                                        </div>

                                        <div className="flex gap-3 mt-4">
                                            {ticket.file && (
                                                <a
                                                    href={ticket.file}
                                                    target="_blank"
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
                                                >
                                                    View File
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}