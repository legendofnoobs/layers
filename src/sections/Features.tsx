import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Avatar from "@/components/Avatar";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import Image from "next/image";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24 px-4">
            <div className="container m-auto">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">Simplicity</span></h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-red-500 z-30">
                                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-green-500 z-20">
                                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-500 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => {
                                        return (
                                            <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                                        )
                                    })}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard className="md:col-span-2 lg:col-span-1"
                        title="Interactive Prototyping"
                        description="Engage your clients with protypes that reacts to user actions."
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                        title="Keyboard Quick Actions"
                        description="WPowerful commands to help you create designs more quickly."
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">

                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 md:gap-5 justify-center">
                    {features.map(feature => (
                        <div className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center " key={feature}>
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
