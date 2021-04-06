import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { getCategoryUrl } from "../../lib/helpers"

export const JournalBreadcrumb = ({ category = '', post }) => {
  const categoryUrl = getCategoryUrl(category)
  return (
    <BreadcrumbNav aria-label="breadcrumb">
      <ol>
        <li>
          <Link to="/journal">JOURNAL</Link>
        </li>
        <li>
          <Link to={categoryUrl}>{category}</Link>
        </li>
        <li aria-current="location">
          <span>{post.name}</span>
        </li>
      </ol>
    </BreadcrumbNav>
  )
}

export const ProductBreadCrumb = ({ category, product }) => {
  return (
    <BreadcrumbNav aria-label="breadcrumb">
      <ol>
        <li>
          <Link to={category.link}>{category.name}</Link>
        </li>
        <li aria-current="location">
          <span>{product.name}</span>
        </li>
      </ol>
    </BreadcrumbNav>
  )
}

const BreadcrumbNav = styled.nav`
padding: 0 0.5rem;
  ol {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-transform: uppercase;

    li {
      display: inline;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }

    li + li::before {
      padding: 8px;
      content: ">";
      color: rgb(130, 117, 104);

    }

    span {
      color: var(--color-text);
    }

    a {
      text-decoration: underline;
      text-decoration-color: transparent;
      color: rgb(130, 117, 104);

      transition: all 0.3s;

      &:active,
      &:hover {
        outline: 0;
      }

      &:hover {
        text-decoration-color: var(--color-text);
      }

      &:focus {
        outline: thin dotted;
      }
    }
  }
`
