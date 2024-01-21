import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from '../styles/Home.module.css';
import Link from "next/link";

const Navbar = () => {
    const address = useAddress();

    return(
        <div className={styles.navContainer}>
            <h3 className={styles.navTitle}>NFT Share Market</h3>
            <div style={{ display: "flex", flexDirection: "row"}}>
                {address && (
                    <div style={{ display: "flex", flexDirection: "row", marginRight: "40px"}}>
                        <Link
                            href="/"
                        >
                            <p className={styles.navLink}>Shop</p>
                        </Link>
                        <Link
                            href={`/account/${address}`}
                        >
                            <p className={styles.navLink}>My Shares</p>
                        </Link>
                        <Link
                            href={`https://tally.so/r/w2PR9M`}
                        >
                            <p className={styles.navLink}>Sell Your Stocks</p>
                        </Link>
                    </div>
                )}
                <ConnectWallet 
                    btnTitle="Sign In"
                    modalTitle="Sign In"
                    modalTitleIconUrl=""
                />
            </div>
        </div>
    )
};

export default Navbar;