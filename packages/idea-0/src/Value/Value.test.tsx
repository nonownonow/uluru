import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { VALUE } from "./VALUE2";
import { Default, Polymorphic, WithLabel } from "./VALUE.stories";
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
