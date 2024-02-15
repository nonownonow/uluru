import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { VALUE } from "./VALUE";
import { Default, Polymorphic, WithLabel } from "./VALUE.stories";
import { ComponentProps } from "react";
type Args = ComponentProps<typeof VALUE>;
describe("VALUE", () => {
  test("default", () => {
    const { asFragment } = render(<VALUE {...(Default.args as Args)} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          Hello 
          <em>
            world
          </em>
        </div>
      </DocumentFragment>
    `);
  });
  test("polymorphic", () => {
    const { asFragment } = render(<VALUE {...(Polymorphic.args as Args)} />);
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
    const { asFragment } = render(<VALUE {...(WithLabel.args as Args)} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          My Hello 
          <em>
            world
          </em>
        </div>
      </DocumentFragment>
    `);
  });
});
