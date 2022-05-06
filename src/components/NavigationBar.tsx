import React from "react";
import { NavLink, NavigationWrapper } from "../../styles/layout.style";

export const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <NavLink as="Link" href="/about">
        About
      </NavLink>
      <NavLink as="Link" href="/portfolio">
        Portfolio
      </NavLink>
      <NavLink
        as="a"
        target="_blank"
        href="https://docs.google.com/document/d/1qjGsgXvPJEEsMYeFVT7GEanE5B5o5LaK10I65qfWLBk/edit?usp=sharing"
      >
        Resume
      </NavLink>
      <NavLink as="a" target="_blank" href="https://github.com/annacarey">
        Github
      </NavLink>
      <NavLink as="a" target="_blank" href="https://anna-carey.medium.com/">
        Writing
      </NavLink>
    </NavigationWrapper>
  );
};
