import React from 'react';

const BoardMembers = () => {
    const boardMembers = [
        {
            id: 1,
            name: "Mr. Sushil Kumar Roongta",
            designation: "Chairman, Independent Director",
            img: "/home/bod/RKJ_9767.webp",
            description: "A seasoned professional with expertise in electrical engineering, business management, and industry leadership, complemented by a strong background in governance and CSR. Actively engaged with apex industry bodies, serving as a member of FICCI and ASSOCHAM, and contributing as a jury member for various national awards. Recognised for outstanding leadership with the prestigious SCOPE Gold Award.",
            committees: [
                { type: "csr", role: "Chairman", initial: "C" },
                { type: "audit", role: "Member", initial: "M" },
                { type: "nomination", role: "Member", initial: "M" }
            ]
        },
        {
            id: 2,
            name: "Mr. Rajesh Kumar",
            designation: "CEO & Whole Time Director",
            img: "/home/bod/01 CEO Rajesh Kumar copy.webp",
            description: "A senior professional with over 35 years of experience at Tata Steel, bringing deep expertise in operations, maintenance, project implementation, manufacturing, strategic planning and finance. Known for a strong track record in driving efficiency and execution across functions. Holds a Gold Medal in Finance from XLRI, reflecting academic excellence and financial acumen.",
            committees: [
                { type: "csr", role: "Member", initial: "M" },
            ]
        },
        {
            id: 3,
            name: "Mr. Tarun Jain",
            designation: "Non-Executive Director",
            img: "/home/bod/Mr Tarun Jain_.webp",
            description: "A finance veteran with over 34 years of experience across corporate finance, audit, taxation, secretarial practices, mergers and acquisitions and strategic financial management. Has held key leadership roles at Vedanta, Cairn India and Sterlite, contributing to major financial and strategic initiatives. Currently serves on the boards of medical and advisory firms, bringing deep financial insight and governance expertise.",
            committees: [
                { type: "nomination", role: "Member", initial: "M" },
                { type: "audit", role: "Member", initial: "M" }
            ]
        },
        {
            id: 4,
            name: "Dr. Anoop Kumar Mittal",
            designation: "Independent Director",
            img: "/home/bod/1680520413168 (2).webp",
            description: "A distinguished professional with expertise in civil engineering, consultancy, real estate development and project management, coupled with extensive public sector leadership experience. Formerly led NBCC India and currently serves on the boards of Welspun and Berger Paints. Notable appointment by the Supreme Court to the Board of Unitech, reflecting strong credentials in governance and sectoral reform.",
            committees: [
                { type: "csr", role: "Member", initial: "M" },
            ]
        },
        {
            id: 5,
            name: "Ms. Nirupama Kotru",
            designation: "Government Nominee Director",
            img: "/home/bod/Picture 1_1.webp",
            description: "An accomplished IRS officer with expertise in electrical engineering, business management, industry leadership, governance and CSR. Has played a key role in driving e-governance and corporate affairs initiatives at the national level. Currently serves as a Board member at Hindustan Zinc and is actively involved with apex industry bodies, contributing to policy and strategic dialogue.",
            committees: [
                { type: "csr", role: "Member", initial: "M" },
            ]
        },
        {
            id: 6,
            name: "Ms. Farida M Naik",
            designation: "Government Nominee Director",
            img: "/home/bod/farida-m-naik-img.webp",
            description: "A seasoned CSS officer with a strong background in public administration, psychology and governance within the mining sector. Has held key roles in the National Book Trust and the Ministry of Mines, contributing to policy and institutional development. Currently serves on the Board of Hindustan Zinc, bringing valuable administrative insight and sectoral experience.",
            committees: []
        },
        {
            id: 7,
            name: "Mr. Mustaq Ahmad",
            designation: "Government Nominee Director",
            img: "/home/bod/Mustaq Ahmad.webp",
            description: "A senior IDAS officer with expertise in defence accounts, law, public administration and mining sector governance. Holds legal qualifications and has served in key roles across the Ministry of Defence (Finance) and the Ministry of Mines. Brings a well-rounded perspective, combining financial oversight, legal insight, and policy-level experience in public sector governance.",
            committees: []
        },
        {
            id: 8,
            name: "Mr. Maneesh Kumar",
            designation: "Government Nominee Director",
            img: "/home/bod/Maneesh Kumar.webp",
            description: "An IFS officer with expertise in environmental governance, public administration and forest services. Currently serving as Deputy Secretary in the Ministry of Mines, with a strong focus on world-class environmental regulation and policy implementation. Brings a balanced perspective on sustainable development and regulatory affairs within the mining and natural resources sectors.",
            committees: []
        },
        {
            id: 9,
            name: "Mr. Dindayal Jalan",
            designation: "Independent Director",
            img: "/home/bod/Mr. D.D. Jalan.webp",
            description: "A seasoned finance leader with deep expertise in corporate finance, governance, strategic financial management and international operations, particularly in the metals and mining sector. Former Group CFO of Vedanta Resources, with a proven track record in steering large-scale financial strategies. Currently serves on the boards of Vedanta and the HDFC Group, bringing strong leadership and global financial insight.",
            committees: [
                { type: "nomination", role: "Chairman", initial: "C" },
                { type: "audit", role: "Chairman", initial: "C" }
            ]
        }
    ];

    const getCommitteeColor = (type) => {
        switch (type) {
            case 'audit':
                return '#ee9122';
            case 'csr':
                return '#72bf44';
            case 'nomination':
                return '#0064a7';
            default:
                return '#6b7280';
        }
    };

    return (
        <div className="marginal py-20">
            {/* Header Section */}
            <div className="mb-20">
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-light'>
                    Profiles of Board of Directors
                </h1>
            </div>

            {/* Cards Container */}
            <div className="space-y-8">
                {boardMembers.map((member) => (
                    <div key={member.id} className="group">
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-100 ">
                            <div className="flex h-full">
                                {/* Profile Image Section */}
                                <div className="md:w-[30%] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Committee Circles */}
                                    {member.committees.length > 0 && (
                                        <div className="absolute top-6 right-6 flex flex-col gap-3">
                                            {member.committees.map((committee, index) => (
                                                <div
                                                    key={index}
                                                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-125 hover:rotate-12 border-2 border-white/20 backdrop-blur-sm`}
                                                    title={`${committee.role} - ${committee.type.charAt(0).toUpperCase() + committee.type.slice(1)} Committee`}
                                                    style={{
                                                        backgroundColor: getCommitteeColor(committee.type)
                                                    }}
                                                >
                                                    <span className="text-white text-sm font-black tracking-wider">
                                                        {committee.initial}
                                                    </span>
                                                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="w-3/5 p-12 flex flex-col justify-center">
                                    <div className="mb-3">
                                        <h3 className="text-3xl font-bold mb-3 ">
                                            {member.name}
                                        </h3>
                                        <p className="text-lg text-gray-600 font-medium">
                                            {member.designation}
                                        </p>
                                    </div>

                                    {/* Board Committees */}
                                    {member.committees.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="text-[#015c94] mb-2 font-semibold text-xl">
                                                Board committees
                                            </h4>
                                            <div className="text-sm text-gray-600">
                                                {member.committees.map((committee, index) => (
                                                    <div key={index} className="mb-1">
                                                        <span className="font-medium">{committee.role}:</span> {' '}
                                                        {committee.type === 'csr' ? 'Corporate Social Responsibility' :
                                                            committee.type === 'audit' ? 'Audit Committee' :
                                                                'Nomination & Remuneration Committee'}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Description */}
                                    <p className="text-lg text-gray-700 leading-relaxed ">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="bg-white rounded-3xl shadow-lg p-12 mt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Board committees</h3>

                <div className="flex flex-wrap gap-12 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ee9122' }}></div>
                        <span className="text-base text-gray-700 font-medium">Audit Committee</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#72bf44' }}></div>
                        <span className="text-base text-gray-700 font-medium">Corporate Social Responsibility Committee</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#0064a7' }}></div>
                        <span className="text-base text-gray-700 font-medium">Nomination and remuneration Committee</span>
                    </div>
                </div>

                <div className="text-base text-gray-600 border-t border-gray-200 pt-6">
                    <span className="font-bold">C</span> = Chairperson; <span className="font-bold">M</span> = Member
                </div>
            </div>
        </div>
    );
};

export default BoardMembers;