import { useRef } from "react"
import { Button } from "./button"
import { TiLocationArrow } from "react-icons/ti"

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];
export const Navbar = () => {
    const navContainerRef = useRef(null)
    return (
        <div className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png"
                            alt="logo"
                            className="w-10" 
                        />
                        <Button 
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass={"bg-blue-50 hidden items-center justify-center gap-1 md:flex"}
                        />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {
                                navItems.map((item, i)=> (
                                    <a key={i} 
                                        href={`#${item.toLowerCase()}`}
                                        className="nav-hover-btn ">
                                        {item}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
