import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

const NavbarComponent = () => {
  return (
    <Navbar shouldHideOnScroll position="static">
      <NavbarBrand>
        <Button as={Link} color="primary" href="/" variant="flat">
          <p className="font-bold text-inherit">Recyco</p>
        </Button>
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/pelanggan">
            Pelanggan
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/pemesanan/jasa" aria-current="page">
            Pemesanan Jasa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/produk">
            Produk
          </Link>
        </NavbarItem>
      </NavbarContent>
      {(() => {
        const token = localStorage.getItem("token");

        if (!token) {
          return (
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Button as={Link} color="primary" href="/login" variant="flat">
                  Login
                </Button>
              </NavbarItem>
            </NavbarContent>
          );
        }

        return (
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Button  as={Link} color="primary" type="button" href="/logout" variant="flat">
                  Log Out
                </Button>
              </NavbarItem>
            </NavbarContent>
        );
      })()}
    </Navbar>
  );
};

export default NavbarComponent;
