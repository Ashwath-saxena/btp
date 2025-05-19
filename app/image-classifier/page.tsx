// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import { CarFrontIcon, ParkingCircleIcon, ScanTextIcon } from 'lucide-react'
// import { ReactNode } from 'react'

// export default function Features() {
//     return (
//         <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
//             <div className="@container mx-auto max-w-5xl px-6">
//                 <div className="text-center">
//                     <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Real-Time Detection Results :</h2>
//                 </div>
//                 <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
//                     <Card className="group shadow-zinc-950/5">
//                         <CardHeader className="pb-3">
//                             <CardDecorator>
//                                 <ScanTextIcon
//                                     className="size-10"
//                                     aria-hidden
//                                 />
//                             </CardDecorator>

//                             <h3 className="mt-6 font-medium">Vehicle Apartment Number</h3>
//                         </CardHeader>

//                         <CardContent>
//                             <p className="text-lg">KL 07CQ 6637</p>
//                         </CardContent>
//                     </Card>

//                     <Card className="group shadow-zinc-950/5">
//                         <CardHeader className="pb-3">
//                             <CardDecorator>
//                                 <CarFrontIcon
//                                     className="size-10"
//                                     aria-hidden
//                                 />
//                             </CardDecorator>

//                             <h3 className="mt-6 font-medium">Type of Vehicle</h3>
//                         </CardHeader>

//                         <CardContent>
//                             <p className="mt-1 text-lg">Taxi</p>
//                         </CardContent>
//                     </Card>

//                     <Card className="group shadow-zinc-950/5">
//                         <CardHeader className="pb-3">
//                             <CardDecorator>
//                                 <ParkingCircleIcon
//                                     className="size-10"
//                                     aria-hidden
//                                 />
//                             </CardDecorator>

//                             <h3 className="mt-6 font-medium">Assigned Parking Spot</h3>
//                         </CardHeader>

//                         <CardContent>
//                             <p className="mt-1 text-lg">LM-57 (Underground L-1)</p>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </section>
//     )
// }

// const CardDecorator = ({ children }: { children: ReactNode }) => (
//     <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
//         <div
//             aria-hidden
//             className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
//         />
//         <div
//             aria-hidden
//             className="bg-radial to-background absolute inset-0 from-transparent to-75%"
//         />
//         <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
//     </div>
// )

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CarFrontIcon, ParkingCircleIcon, ScanTextIcon, ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Real-Time Detection Results :</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">KL 07CQ 6637</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <CarFrontIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Type of Vehicle</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-1 text-lg">Taxi</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ParkingCircleIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Assigned Parking Spot</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-1 text-lg">LM-57 (Underground L-1)</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="mt-12 flex justify-center">
                    <Link href="/#hero-section">
                        <Button variant="outline" size="lg" className="flex items-center gap-2 cursor-pointer">
                            <ArrowLeft className="size-4" />
                            Go back
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)