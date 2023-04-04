import "./CacheTypeFilter.scss";
import { ChangeEvent } from "react";
import { CacheTypes } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";
import CacheT from "../../../images/cacheT.gif";
import CacheM from "../../../images/cacheM.gif";
import CacheU from "../../../images/cacheU.gif";
import CacheB from "../../../images/cacheB.gif";
import CacheR from "../../../images/cacheR.gif";
import CacheWh from "../../../images/cacheWh.gif";
import CacheV from "../../../images/cacheV.gif";
import CacheW from "../../../images/cacheW.gif";
import CacheE from "../../../images/cacheE.gif";
import CacheME from "../../../images/cacheME.gif";
import CacheC from "../../../images/cacheC.gif";
import C3653 from "../../../images/3653.gif";

interface Props{
    onChange: (cacheTypes: CacheTypes) => void;
    cacheTypes?: CacheTypes;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const CacheTypeFilter = ({
    onChange,
    cacheTypes,
    eventKey
}: Props) => {

    const modifyCacheTypes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof CacheTypes;
        const value = e.target.checked;
        onChange({
            ...cacheTypes,
            [name]: value
        });
    };

    return (
        <MapFilterItem header="Kätkötyyppi" eventKey={eventKey}>
            <div className="check-box-filters">
                <div className="check-box-filter">
                    <input
                        id="peruskätkö"
                        type="checkbox"
                        name="peruskätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.peruskätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheT} className="icon"/><label htmlFor="peruskätkö">Peruskätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="multikätkö"
                        type="checkbox"
                        name="multikätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.multikätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheM} className="icon"/><label htmlFor="multikätkö">Multikätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="mysteerikätkö"
                        type="checkbox"
                        name="mysteerikätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.mysteerikätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheU} className="icon"/><label htmlFor="mysteerikätkö">Mysteerikätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="geolodju"
                        type="checkbox"
                        name="geolodju"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.geolodju || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheB} className="icon"/><label htmlFor="geolodju">Geolodju</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="geokohde"
                        type="checkbox"
                        name="geokohde"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.geokohde || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheR} className="icon"/><label htmlFor="geokohde">Geokohde</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="whereigokätkö"
                        type="checkbox"
                        name="whereigokätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.whereigokätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheWh} className="icon"/><label htmlFor="whereigokätkö">Whereigo-kätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="virtuaalikätkö"
                        type="checkbox"
                        name="virtuaalikätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.virtuaalikätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheV} className="icon"/><label htmlFor="virtuaalikätkö">Virtuaalikätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="webcamkätkö"
                        type="checkbox"
                        name="webcamkätkö"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.webcamkätkö || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheW} className="icon"/><label htmlFor="webcamkätkö">Webcam-kätkö</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="tapahtuma"
                        type="checkbox"
                        name="tapahtuma"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.tapahtuma || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheE} className="icon"/><label htmlFor="tapahtuma">Tapahtuma</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="megatapahtuma"
                        type="checkbox"
                        name="megatapahtuma"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.megatapahtuma || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheME} className="icon"/><label htmlFor="megatapahtuma">Mega-tapahtuma</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="siivoustapahtuma"
                        type="checkbox"
                        name="siivoustapahtuma"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.siivoustapahtuma || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={CacheC} className="icon"/><label htmlFor="siivoustapahtuma">Siivoustapahtuma (CITO)</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="yhteisöjuhla"
                        type="checkbox"
                        name="yhteisöjuhla"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.yhteisöjuhla || DEFAULT_DISPLAY_VALUE}
                    />
                    <img src={C3653} className="icon"/><label htmlFor="yhteisöjuhla">Yhteisöjuhla</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="vainOmiaMerkittyjäSisältäenMysteerit"
                        type="checkbox"
                        name="vainOmiaMerkittyjäSisältäenMysteerit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainOmiaMerkittyjäSisältäenMysteerit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainOmiaMerkittyjäSisältäenMysteerit">Vain omia merkittyjä sisältäen mysteerit</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="vainOmiaMerkittyjäSisältäenMultit"
                        type="checkbox"
                        name="vainOmiaMerkittyjäSisältäenMultit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainOmiaMerkittyjäSisältäenMultit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainRatkaistutMultit">Vain omia merkittyjä sisältäen multit</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="vainRatkaistutMysteerit"
                        type="checkbox"
                        name="vainRatkaistutMysteerit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainRatkaistutMysteerit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainRatkaistutMysteerit">Vain ratkaistut mysteerit</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="vainRatkaistutMultit"
                        type="checkbox"
                        name="vainRatkaistutMultit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainRatkaistutMultit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainRatkaistutMultit">Vain ratkaistut multit</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default CacheTypeFilter;