import { NavbarDesktop } from "@/features/Navbar/ui/NavbarDesktop/NavbarDesktop";
import { NavbarMobile } from "@/features/Navbar/ui/NavbarMobile/NavbarMobile";
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