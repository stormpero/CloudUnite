import React from "react";
import { DiskDrawerDesktop } from "./DiskDrawerDesktop";
import { DiskDrawerMobile } from "./DiskDrawerMobile";

export const DiskDrawer = ({ mobileDrawerOpen, mobileDrawerToggle }) => {
    return (
        <>
            <DiskDrawerDesktop />
            <DiskDrawerMobile
                mobileDrawerOpen={mobileDrawerOpen}
                mobileDrawerToggle={mobileDrawerToggle}
            />
        </>
    );
};
