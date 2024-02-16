import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ARRAY } from "~/ARRAY/ARRAY";
import {
  defaultProps,
  polymorphicProps,
  withItemFormatProps,
} from "./ARRAY.props";

describe("ARRAY", () => {
  test("default", () => {
    const { asFragment } = render(<ARRAY {...defaultProps} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-array=""
        >
          <div
            data-idea-item="0"
            data-idea-value=""
          >
            hello
          </div>
          <div
            data-idea-item="1"
            data-idea-value=""
          >
            world
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  test("polymorphic", () => {
    const { asFragment } = render(<ARRAY {...polymorphicProps} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ul
          data-idea-array=""
        >
          <li
            data-idea-item="0"
            data-idea-value=""
          >
            a
          </li>
          <li
            data-idea-item="1"
            data-idea-value=""
          >
            d
          </li>
          <li
            data-idea-item="2"
            data-idea-value=""
          >
            d
          </li>
          <li
            data-idea-item="3"
            data-idea-value=""
          >
            1
          </li>
          <li
            data-idea-item="4"
            data-idea-value=""
          />
          <li
            data-idea-item="5"
            data-idea-value=""
          />
        </ul>
      </DocumentFragment>
    `);
  });
  test("withItemFormat", () => {
    const { asFragment } = render(<ARRAY {...withItemFormatProps} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-array=""
        >
          <div
            data-idea-item="0"
            data-idea-value=""
          >
            My d
          </div>
          <div
            data-idea-item="1"
            data-idea-value=""
          >
            Oh My 1
          </div>
          <div
            data-idea-item="2"
            data-idea-value=""
          >
            My true
          </div>
          <div
            data-idea-item="3"
            data-idea-value=""
          >
            My false
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
