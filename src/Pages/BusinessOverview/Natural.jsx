import React from 'react';

const Natural = () => {
    return (
        <div>
            {/* Background Section */}
            <div className='bg-[#348e6f]'>
                <div className="bg-[url('BusinessOverview/Natural/Page-100-Image.webp')] bg-contain bg-no-repeat bg-left w-full min-h-[50vh] md:min-h-screen">
                    <div className="px-4 sm:px-6 lg:px-12 py-10 flex items-center">
                        {/* Commented content remains as is */}
                    </div>
                </div>
            </div>
            {/* Financial Highlights Section */}
            <div className='px-4 sm:px-6 lg:px-12 xl:px-16'>
                {/* Financial Highlights Image */}
                <div className="overflow-x-auto">
                    <img
                        src="BusinessOverview/Natural/Page-102-Image.webp"
                        alt="Financial Highlights"
                        className='min-w-[800px] sm:min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] xl:min-w-[1400px] p-4 sm:p-6 lg:p-10 w-full'
                    />
                </div>

                {/* Focus Area - Planet */}
                <div>
                    <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-6 sm:mb-10'>Focus Area- Planet</h1>
                    <img src="BusinessOverview/Natural/Page-102-Image-1.webp" alt="Planet Focus" className='w-full h-auto' />
                    <img src="BusinessOverview/Natural/Page-102-Image-2.webp" alt="Planet Focus 2" className='mt-6 sm:mt-10 w-full h-auto' />
                </div>

                {/* Climate Change Section */}
                <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8'>
                    <div className='w-full lg:w-1/2 lg:order-2'>
                        <img src="BusinessOverview/Natural/Page-103-Image.webp" alt="Climate Change" className="w-full h-auto mt-4 lg:mt-10" />
                    </div>
                    <div className='w-full lg:w-1/2 lg:order-1'>
                        <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold mt-4 sm:mt-8'>Climate change and decarbonisation</h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                            Adverse climate events can damage infrastructure, deplete
                            natural resources and disrupt supply networks, jeopardising
                            the availability of vital resources required for the business's
                            long-term viability. Such incidents can lead to a decrease in
                            production efficiency, an increase in operational expenses and
                            risks to employee safety.
                        </p>
                        <h1 className='text-lg sm:text-xl lg:text-2xl font-bold mt-6 sm:mt-8'>BALCO's commitment to net-zero</h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                            Disruptions in logistics and supply chains can delay the delivery
                            of raw materials, which may impede business continuity. We
                            address climate-related concerns by undertaking proactive risk
                            management for long-term growth.
                        </p>
                    </div>
                </div>

                {/* Emission Reduction */}
                <div className='mt-6 sm:mt-8'>
                    <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>Emission reduction</h1>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='w-full sm:w-1/2'>
                            <img src="BusinessOverview/Natural/63068618-8b90-4008-b8e1-8dfa7f1596a0.webp" alt="Emission Chart 1" className='w-full h-auto' />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <img src="BusinessOverview/Natural/5e0944fb-96e4-44e1-9182-fcc4c078e469.webp" alt="Emission Chart 2" className='w-full h-auto' />
                        </div>
                    </div>
                </div>

                {/* Power Generation */}
                <div className='mt-8 sm:mt-10'>
                    <div className='flex flex-col lg:flex-row gap-4 sm:gap-5'>
                        <div className='w-full lg:w-1/2'>
                            <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold'>Power generation and energy management</h1>
                            <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                                We rely on enhancing energy efficiency and optimising power
                                generation through innovative solutions and sustainable
                                technologies. Our efforts are focused on reducing energy
                                consumption, improving operational efficiency and transitioning
                                towards low-carbon energy alternatives.
                            </p>
                        </div>
                        <div className='bg-[#74c044] w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 text-lg sm:text-xl lg:text-2xl text-white font-bold rounded-2xl sm:rounded-3xl'>
                            <h1 className='leading-relaxed'>
                                Various energy efficiency initiatives
                                such as Novel Cathode relining
                                design and graphitisation of pots
                                offered a unique energy efficient
                                lining technique which reduces energy
                                consumption of aluminium production.
                            </h1>
                        </div>
                    </div>

                    {/* Graphitisation Section */}
                    <div className='mt-8 sm:mt-10'>
                        <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Graphitisation of pots</h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                            BALCO has achieved 100% implementation of graphitised pots
                            across all operations. This breakthrough has led to enhanced
                            energy efficiency, of aluminium production. Additionally, the
                            pot life has increased reducing maintenance frequency and
                            improving overall sustainability.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-4 mt-6 sm:mt-8'>
                            <div className='text-center'>
                                <h1 className='text-[#348e6e] text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                    300 kWh/MT
                                </h1>
                                <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                    Energy reduction
                                </p>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-[#348e6e] text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                    0.42 tCO2/MT
                                </h1>
                                <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                    Carbon reduction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Water Management */}
                <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 mt-8 sm:mt-10 items-start'>
                    <div className='w-full lg:w-2/3'>
                        <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold'>
                            Water management and conservation
                        </h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-4 leading-relaxed'>
                            BALCO prioritises responsible water management, ensuring
                            efficient utilisation, conservation and recycling across operations.
                            With a strong commitment to sustainability, we implement
                            cutting-edge technologies and best practices to minimise water
                            footprint while maintaining operational efficiency.
                        </p>

                        <div className='mt-8 sm:mt-12'>
                            <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6'>
                                Key achievements in FY 2025
                            </h2>
                            <div className='w-full'>
                                <img
                                    src="BusinessOverview/Natural/Page-104-Image-1.webp"
                                    alt="Key achievements in water management"
                                    className='w-full h-auto object-contain rounded-lg'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3 lg:pl-4'>
                        <div className='lg:sticky lg:top-8'>
                            <img
                                src="BusinessOverview/Natural/Page-104-Image.webp"
                                alt="Water management illustration"
                                className='w-full h-auto object-contain rounded-lg shadow-sm'
                            />
                        </div>
                    </div>
                </div>

                {/* Water Conservation Measures */}
                <div className='mt-8 sm:mt-10 border-b border-gray-200 pb-8 sm:pb-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6'>
                        Water Conservation Measures
                    </h2>
                    <img src="BusinessOverview/Natural/Page-105-Image.webp" alt="Water Conservation" className='w-full h-auto' />
                </div>

                {/* Waste Management */}
                <div className='mt-8 sm:mt-10'>
                    <h1 className='text-[#3f7e59] text-xl sm:text-2xl font-bold'>Waste management</h1>
                    <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                        We have established waste management standards in accordance with International Council on Mining and Metals (ICMM)
                        guidelines. These standards are further complemented by a well-defined waste management procedure—together, they outline
                        a structured hierarchy for managing waste efficiently. We begin by making proactive efforts to identify opportunities for waste
                        prevention and reduction. The next step entails the recovery and recycling of waste materials, whether internally within our facilities
                        or through strategic collaborations with authorized third-party entities.
                    </p>

                    <div className='flex flex-col lg:flex-row mt-8 sm:mt-10 gap-6 lg:gap-0'>
                        <div className='w-full lg:w-1/3 mb-6 lg:mb-0'>
                            <div>
                                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6'>
                                    Waste Management Hierarchy
                                </h2>
                            </div>
                            <div className='flex justify-center'>
                                <img
                                    src="BusinessOverview/Natural/Page-105-Image-1.webp"
                                    alt="Waste Management Hierarchy"
                                    className='h-auto max-h-96 w-full object-contain'
                                />
                            </div>
                        </div>

                        <div className='w-full lg:w-1/3 lg:pr-6 lg:border-r border-gray-200 mb-6 lg:mb-0'>
                            <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6'>
                                Fly ash management
                            </h2>
                            <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
                                For the management of fly ash, we have
                                implemented the High Concentration
                                Slurry Disposal System (HCSD) to dispose
                                of ash at dykes, which is an environmentfriendly methodology for ash conveying/
                                disposal. Additionally, dust suppression
                                measures have been implemented,
                                including stationary sprinklers provided
                                on the dyke surface. A mobile sprinkling
                                system using tankers is in place. Further,
                                ash trucks are covered with tarpaulin and
                                moisturised before leaving the dykes.
                                For efficient utilisation of fly ash, we have
                                signed MoUs with some of the leading
                                cement companies in India.
                            </p>
                        </div>

                        <div className='w-full lg:w-1/3 lg:pl-6 flex items-center justify-center lg:items-end'>
                            <div className='text-center'>
                                <h1 className='text-[#348e6e] text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                    100%
                                </h1>
                                <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                    of the ash water
                                    is recycled in our
                                    operations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Biodiversity Section */}
                <div className='mt-12 sm:mt-20 bg-[#f4f9f1] p-4 sm:p-5 rounded-lg'>
                    <img src="BusinessOverview/Natural/Page-106-Image.webp" alt="Biodiversity Header" className='border-b border-gray-200 pb-8 sm:pb-10 w-full h-auto' />

                    <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8'>
                        <div className='w-full lg:w-1/2 lg:order-2'>
                            <img src="BusinessOverview/Natural/Page-106-Image-1.webp" alt="Biodiversity" className="w-full h-auto mt-4 lg:mt-10" />
                        </div>
                        <div className='w-full lg:w-1/2 lg:order-1'>
                            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-8'>Biodiversity</h1>
                            <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                                We adhere to the Vedanta Biodiversity Policy, which
                                focuses on conserving ecosystems in the areas where
                                we operate. We ensure that activities are strictly
                                prohibited in ecologically sensitive zones and make
                                dedicated efforts to restore degraded land through
                                large plantation drives.
                                Besides ensuring compensatory afforestation, we
                                ascertain that all mine voids are adequately filled
                                with disposed ash from the power plants. Also, we
                                have planted native plant species to restore habitats.
                            </p>
                            <div className='flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-4 mt-6 sm:mt-8'>
                                <div className='text-center'>
                                    <h1 className='text-[#348e6e] text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                        51,523
                                    </h1>
                                    <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                        Saplings planted in FY 2025
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-[#348e6e] text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                        2,030
                                    </h1>
                                    <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                        No Net Loss of Biodiversity target
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Image */}
                <div className='mt-8 sm:mt-10'>
                    <img src="BusinessOverview/Natural/Page-107-Image.webp" alt="Final Report" className='w-full h-auto' />
                </div>
            </div>
        </div>
    );
};

export default Natural;