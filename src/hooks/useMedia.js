import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect, useState } from "react";

const useMedia = () => {
    const [xs, setXs] = useState(false);
    const [sm, setSm] = useState(false);
    const [md, setMd] = useState(false);
    const [lg, setLg] = useState(false);
    const [xl, setXl] = useState(false);
    const [xxl, setXxl] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoints = useBreakpoint();

    useEffect(() => {
        setXs(breakpoints.xs);
        const blen = Object.entries(breakpoints).filter(point => !!point[1]).length;
        setSm(blen <= 1)
        setMd(blen <= 2)
        setLg(blen <= 3)
        setXl(blen <= 4)
        setXxl(blen <= 5)
    }, [breakpoints]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

        return () => {
            window.removeEventListener("resize", () => {
                setWidth(window.innerWidth);
            });
        }
    }, [])

    return { xs, sm, md, lg, xl, xxl, width }
};

export default useMedia;