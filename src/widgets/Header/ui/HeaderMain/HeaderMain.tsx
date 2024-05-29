import { NavbarDesktop, NavbarMobile } from "@/features/Navbar";
import { BrowserView, MobileView } from "react-device-detect";

export const HeaderMain = () => {
    return (
        <div>
            <BrowserView>
                <NavbarDesktop />
            </BrowserView>

            <MobileView>
                <NavbarMobile />
            </MobileView>
        </div>
    );
};