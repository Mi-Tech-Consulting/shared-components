



export default function Sidebar() {


    return (
        <div className="h-dvh">
            <div className="static flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
                <div className="flex items-center justify-between"><div className="flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <svg fill="none" height="36" viewBox="0 0 32 32" width="36" className="text-background">
                            <path clip-rule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    </div>
                    <span className="text-small font-bold uppercase">Acme</span></div>
                    <div className="flex items-center justify-end">
                        <button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-10 w-10 h-10 z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased -mr-1" type="button" data-slot="trigger" id="react-aria5200949239-:r0:" aria-haspopup="true" aria-expanded="false">
                            <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny bg-default text-default-foreground rounded-full h-6 w-6 cursor-pointer">
                                <img src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg" className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100" alt="Kate Moore" data-loaded="true" />
                            </span>
                        </button>
                        <button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-10 w-10 h-10 z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased overflow-visible" type="button" data-slot="trigger" aria-expanded="false">

                        </button>
                    </div>
                </div>
                <div className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)] px-1" data-slot="base" data-filled="true" data-filled-within="true">
                    <div data-slot="main-wrapper" className="h-full flex flex-col">
                        <div data-slot="input-wrapper" className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-10 min-h-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background dark:bg-default-50">
                            <div data-slot="inner-wrapper" className="inline-flex w-full items-center h-full box-border">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" className="text-default-500 [&amp;>g]:stroke-[2px] iconify iconify--solar" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <circle cx="11.5" cy="11.5" r="9.5"></circle>
                                        <path stroke-linecap="round" d="M18.5 18.5L22 22"></path>
                                    </g>
                                </svg>
                                <input data-slot="input" className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full" aria-label="search" placeholder="Search..." id="react-aria5200949239-:re:" type="text" value="" title="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}