import "./OffcanvasMenu.scss";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
    open: boolean
    header: string
    body: React.ReactNode
    footer: React.ReactNode
    onClose: () => void
}

const OffcanvasMenu = ({
    open,
    onClose,
    header,
    body,
    footer,
}: Props) => {
    const [hide, setHide] = useState(false);

    const handleClose = () => {
        setHide(true);
        setTimeout(() => {
            setHide(false);
            onClose();
        }, 150);
    };

    if (open) {
        return (
            <>
                <div className={`gc-offcanvas-menu-container ${hide && "gc-offcanvas-menu-container--hide"}`}>
                    <div className="gc-offcanvas-header">
                        <h3>{header}</h3>
                        <div className="gc-offcanvas-close-btn">
                            <AiOutlineClose size="30px" onClick={handleClose} />
                        </div>
                    </div>
                    <div className="gc-offcanvas-content">
                        {body}
                    </div>
                    <div className="gc-offcanvas-footer">
                        {footer}
                    </div>
                </div>
                <div className={`gc-offcanvas-background ${hide && "gc-offcanvas-background--hide"}`}></div>
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

export default OffcanvasMenu;