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

                {/* input 1  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 1 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">KA 51 MD 4157: D-105</p>
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
                            <p className="mt-1 text-lg">Elecrtric Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-07 (Underground L-1)</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* input 2  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 2 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">AS 76 637: A-203</p>
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
                            <p className="mt-1 text-lg">Embassy Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-23 (Underground L-1)</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* input 3  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 3 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">KA 64 N 0099: C-612</p>
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
                            <p className="mt-1 text-lg">Private Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-53 (Underground L-2)</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* input 4  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 4 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">MH 48 F 4053: F-212</p>
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
                            <p className="mt-1 text-lg">Commercial Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-61 (Underground L-3)</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* input 5  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 5 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">MH 04 JM 8765: E-101</p>
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
                            <p className="mt-1 text-lg">Electric Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-27 (Underground L-1)</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* input 6  */}
                <div className="text-balance text-4xl font-semibold lg:text-2xl mt-3" >Input 6 - </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-2 grid max-w-sm gap-6 *:text-center md:mt-8 mb-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ScanTextIcon
                                    className="size-10"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Vehicle and Apartment Number</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-lg">KL 07CQ 6637: G-515</p>
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
                            <p className="mt-1 text-lg">Rental Vehicle</p>
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
                            <p className="mt-1 text-lg">LM-57 (Underground L-2)</p>
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