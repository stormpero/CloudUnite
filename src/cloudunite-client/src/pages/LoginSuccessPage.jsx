import React, { useEffect } from "react";

export function LoginSuccessPage() {
    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 500);
    }, []);

    return <div>Login completed</div>;
}
