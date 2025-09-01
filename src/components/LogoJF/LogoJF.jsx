
export default function LogoJF({
                                   width = 220,
                                   height = 220,
                                   className = "",
                                   title = "Jean Farine",
                               }) {
    return (
        <svg
            className={`logo-jf ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            width={width}
            height={height}
            role="img"
            aria-label={title}
        >
            {/*<title>{title}</title>*/}
            <rect id="hoverTrigger" width="800" height="800" fill="transparent" />
            <defs>
                {/* Mask definition */}
                <mask id="maskReveal">
                    <rect x="0" y="0" width="800" height="800" fill="white" />
                    <rect x="-800" y="0" width="800" height="160" fill="black">
                        <animate
                            attributeName="x"
                            from="-800"
                            to="800"
                            dur="1.5s"
                            begin="0s; hoverTrigger.mouseover"
                            fill="freeze"
                        />
                    </rect>
                    <rect x="-800" y="160" width="800" height="160" fill="black">
                        <animate
                            attributeName="x"
                            from="-800"
                            to="800"
                            dur="1.5s"
                            begin="0.3s;hoverTrigger.mouseover+0.3s"
                            fill="freeze"
                        />
                    </rect>
                    <rect x="-800" y="320" width="800" height="160" fill="black">
                        <animate
                            attributeName="x"
                            from="-800"
                            to="800"
                            dur="1.5s"
                            begin="0.6s;hoverTrigger.mouseover+0.6s"
                            fill="freeze"
                        />
                    </rect>
                    <rect x="-800" y="480" width="800" height="160" fill="black">
                        <animate
                            attributeName="x"
                            from="-800"
                            to="800"
                            dur="1.5s"
                            begin="0s;hoverTrigger.mouseover"
                            fill="freeze"
                        />
                    </rect>
                    <rect x="-800" y="640" width="800" height="160" fill="black">
                        <animate
                            attributeName="x"
                            from="-800"
                            to="800"
                            dur="1.5s"
                            begin="0s;hoverTrigger.mouseover"
                            fill="freeze"
                        />
                    </rect>
                </mask>

                {/* Circle clip for mask */}
                <clipPath id="maskClip">
                    <circle cx="400" cy="380" r="280" />
                </clipPath>
            </defs>

            {/* Mask image with reveal animation */}
            <image
                href="/logo_JF.png"
                x="100"
                y="80"
                width="600"
                height="600"
                clipPath="url(#maskClip)"
                mask="url(#maskReveal)"
            />

            {/* Circular brush effect */}
            <circle
                cx="400"
                cy="380"
                r="290"
                stroke="#fedd58"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1820"
                strokeDashoffset="1820"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="1820"
                    to="0"
                    dur="3s"
                    begin="0s;hoverTrigger.mouseover"
                    fill="freeze"
                />
            </circle>

            {/* Text that appears at the end */}
            {/*<text*/}
            {/*    x="50%"*/}
            {/*    y="95%"*/}
            {/*    textAnchor="middle"*/}
            {/*    fontFamily="Lato, sans-serif"*/}
            {/*    fontSize="32"*/}
            {/*    fontWeight="bold"*/}
            {/*    fill="#fedd58"*/}
            {/*    opacity="0"*/}
            {/*>*/}
            {/*    JEAN FARINE*/}
            {/*    <animate*/}
            {/*        attributeName="opacity"*/}
            {/*        from="0"*/}
            {/*        to="1"*/}
            {/*        dur="1s"*/}
            {/*        begin="4s"*/}
            {/*        fill="freeze"*/}
            {/*    />*/}
            {/*</text>*/}
        </svg>
    );
}
