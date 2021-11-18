import { useState, useEffect } from 'react'

import { Icon } from '@iconify/react'

import {
    NavbarContent,
    Logo,
    Buttons,
    Button,
    ButtonsHamburger,
    Hamburger,
} from './styles'

export default function Navbar() {
    const [opened, setOpened] = useState(false)
    const [changeBg, setchangeBg] = useState(false)

    function close() {
        setOpened(!opened)
    }

    function changeNavbarBg() {
        if(window.scrollY >= 60)
            setchangeBg(true)
        else
            setchangeBg(false)
    }

    useEffect(() => {
        changeNavbarBg()
        window.addEventListener('scroll', changeNavbarBg)

        return () => {
            document.removeEventListener("scroll", changeNavbarBg)
        }
    })

    return(
        <>
            <NavbarContent changeBg={changeBg}>
                <Logo>
                    Setembro Amarelo
                </Logo>
                {/* Normal */}
                <Buttons>
                    <Button href="#campaign">
                        Campanha
                    </Button>
                    <Button href="#people">
                        Por que continuar?
                    </Button>
                    <Button href="#help">
                        Encontre ajuda
                    </Button>
                </Buttons>
                {/* Hamburger */}
                <Hamburger>
                    <Icon icon={opened === false ? 'subway:menu' : 'vaadin:grid-small-o'} onClick={() => close()}/>
                </Hamburger>
            </NavbarContent>
            <ButtonsHamburger opened={opened}>
                <Button href="#campaign" buttonHamburger onClick={() => close()}>
                    Campanha
                </Button>
                <Button href="#people" buttonHamburger onClick={() => close()}>
                    Por que continuar?
                </Button>
                <Button href="#help" buttonHamburger onClick={() => close()}>
                    Encontre ajuda
                </Button>
            </ButtonsHamburger>
        </>
    )
}