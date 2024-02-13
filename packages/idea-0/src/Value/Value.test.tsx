import { expect, test, describe } from "vitest";
import { VALUE } from "./Value";
import React from "react";
import { render } from "@testing-library/react";
import { Default, Polymorphic, WithLabel } from "./Value.stories";
describe("VALUE", () => {
  test("default", () => {
    const { asFragment } = render(<VALUE {...Default.args} />);
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1
        data-idea-value=""
      >
        Hello 
        <em>
          world
        </em>
      </h1>
    </DocumentFragment>
  `);
  });
  test("polymorphic", () => {
    const { asFragment } = render(<VALUE {...Polymorphic.args} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          data-idea-value=""
        >
          Hello 
          <em>
            world
          </em>
        </p>
      </DocumentFragment>
    `);
  });
  test("withValueFormat", () => {
    const { asFragment } = render(<VALUE {...WithLabel.args} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <h1
          data-idea-value="Hello <em>world</em>"
        >
          My Hello 
          <em>
            world
          </em>
        </h1>
      </DocumentFragment>
    `);
  });
});
